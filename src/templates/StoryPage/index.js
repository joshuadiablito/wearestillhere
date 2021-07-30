import React, { Fragment, useContext, useEffect } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import ImageGallery from 'react-image-gallery';
import AudioPlayer from 'react-h5-audio-player';

import SEO from '~/components/seo';

import StoreContext from '../../context/StoreContext';
import { Container, MainContent } from '../../utils/styles';
import { StoryTitle, StoryDescription } from './styles';

const StoryPage = ({ location }) => {
  const {
    store: { stories },
  } = useContext(StoreContext);
  const { pathname } = location;
  const [story] = stories.filter(({ href }) => pathname.includes(href));
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query ImagesQuery {
      allFile {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              originalName
            }
            small: fixed(width: 250) {
              ...GatsbyImageSharpFixed
              originalName
            }
            large: fixed(width: 800) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);

  const [mainImage] = nodes.filter(
    ({ childImageSharp, id }) =>
      childImageSharp && childImageSharp.fluid.originalName === story.mainImage
  );
  const additionalImages = nodes
    .filter(
      ({ childImageSharp }) =>
        childImageSharp &&
        story.images.indexOf(childImageSharp.small.originalName) >= 0
    )
    .map(({ childImageSharp }) => {
      return {
        original: childImageSharp.large.src,
        thumbnail: childImageSharp.small.src,
      };
    });

  const imageGalleryImages = [
    {
      original: mainImage.childImageSharp.large.src,
      thumbnail: mainImage.childImageSharp.small.src,
    },
    ...additionalImages,
  ];

  useEffect(() => {
    if (!story) {
      navigate('/404');
    }
  }, [story]);

  return (
    <Fragment>
      <SEO title={story.title} description={story.description} />
      <Container>
        <MainContent>
          <ImageGallery
            items={imageGalleryImages}
            lazyLoad
            showPlayButton={false}
            showBullets
            showIndex
          />
          {story.audioFile && (
            <AudioPlayer
              src={`/static/audio/${story.audioFile}`}
              timeFormat="mm:ss"
            />
          )}
          <StoryTitle>{story.title}</StoryTitle>
          <StoryDescription
            dangerouslySetInnerHTML={{ __html: story.longStory }}
          />
        </MainContent>
      </Container>
    </Fragment>
  );
};

export default StoryPage;
