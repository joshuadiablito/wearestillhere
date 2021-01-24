import React from 'react';
import { graphql } from 'gatsby';

import SEO from '~/components/seo';
import StoryForm from '~/components/StoryForm';
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles';
import { StoryTitle, StoryDescription } from './styles';

const StoryPage = ({ data }) => {
  const story = data.shopifyStory;
  return (
    <>
      <SEO title={story.title} description={story.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            {story.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={story.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <StoryTitle>{story.title}</StoryTitle>
            <StoryDescription
              dangerouslySetInnerHTML={{ __html: story.descriptionHtml }}
            />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyStory(handle: { eq: $handle }) {
      id
      title
      handle
      storyType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default StoryPage;
