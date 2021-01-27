import React, { useContext } from 'react';

import SEO from '~/components/seo';

import StoreContext from '../../context/StoreContext';
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles';
import { StoryTitle, StoryDescription } from './styles';

const StoryPage = () => {
  const { story } = useContext(StoreContext);

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
