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

const StoryPage = () => {
  const { stories } = useContext(newContext);
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

export default StoryPage;
