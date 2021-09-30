import React, { Fragment, useContext, useEffect } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import loadable from '@loadable/component';

import SEO from '~/components/seo';

import StoreContext from '../../context/StoreContext';
import { Container, MainContent, Title } from '../../utils/styles';
import { Breadcrumbs, Loader, StoryTitle, StoryDescription } from './styles';

const ImageGallery = loadable(() => import('react-image-gallery'));
const AudioPlayer = loadable(() => import('react-h5-audio-player'));

const StoryPage = ({ location }) => {
  const {
    store: { stories },
  } = useContext(StoreContext);
  const { pathname } = location;
  const [story] = stories.filter(({ href }) =>
    pathname.split('/').join('').endsWith(href)
  );
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
    .filter(({ childImageSharp }) => {
      return (
        childImageSharp &&
        story.images.indexOf(childImageSharp.small.originalName) >= 0
      );
    })
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
          <Title>{story.title}</Title>
          <Breadcrumbs>
            <a href="/">Our Project</a> &raquo; <span>{story.title}</span>
          </Breadcrumbs>
          <Loader>
            <ImageGallery
              items={imageGalleryImages}
              lazyLoad
              showPlayButton={false}
              showBullets
              showIndex
              autoPlay
            />
          </Loader>
          {story.audioFile && (
            <AudioPlayer src={story.audioFile} timeFormat="mm:ss" />
          )}
          <StoryTitle>{story.title}'s story</StoryTitle>
          <StoryDescription
            dangerouslySetInnerHTML={{ __html: story.longStory }}
          />
        </MainContent>
      </Container>
    </Fragment>
  );
};

export default StoryPage;
