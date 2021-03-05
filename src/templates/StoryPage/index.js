import React, { Fragment, useContext, useEffect } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';

import SEO from '~/components/seo';

import StoreContext from '../../context/StoreContext';
import {
  Img,
  Container,
  MainContent,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '../../utils/styles';
import { StoryTitle, StoryDescription } from './styles';

const getStoryImages = (mainImage, images) => {
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

  const [image] = nodes.filter(({ childImageSharp, id }) => {
    console.log({ id, childImageSharp });

    return childImageSharp && childImageSharp.fluid.originalName === mainImage;
  });

  const filteredImages = nodes.filter(({ childImageSharp }) => {
    console.log({ child: childImageSharp });
    return (
      childImageSharp && images.indexOf(childImageSharp.small.originalName) >= 0
    );
  });

  return [image, filteredImages];
};

const StoryPage = ({ location }) => {
  const {
    store: { stories },
  } = useContext(StoreContext);
  const { pathname } = location;
  const [story] = stories.filter(({ href }) => pathname.includes(href));
  // console.log({ story, pathname, stories });

  const [mainImage, additionalImages] = getStoryImages(
    story.mainImage,
    story.images
  );

  useEffect(() => {
    if (!story) {
      navigate('/404');
    }
  }, [story]);

  console.log({ mainImage, additionalImages });

  return (
    <Fragment>
      <SEO title={story.title} description={story.description} />
      <Container>
        <MainContent>
          <Img
            fluid={mainImage.childImageSharp.fluid}
            key={story.id}
            alt={`${story.title} - ${story.shortDescription}`}
          />
        </MainContent>
        <TwoColumnGrid>
          <GridLeft>
            {additionalImages.map(({ childImageSharp, id }) => {
              return (
                <Img fixed={childImageSharp.small} key={id} alt={story.title} />
              );
            })}
          </GridLeft>
          <GridRight>
            <StoryTitle>{story.title}</StoryTitle>
            <StoryDescription
              dangerouslySetInnerHTML={{ __html: story.shortDescription }}
            />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </Fragment>
  );
};

export default StoryPage;
