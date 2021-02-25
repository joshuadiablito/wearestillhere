import React, { Fragment, useContext } from 'react';

import SEO from '~/components/seo';

import StoreContext from '../../context/StoreContext';
import {
  Img,
  Container,
  MainContent,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles';
import { StoryTitle, StoryDescription } from './styles';

const StoryPage = ({ location }) => {
  const { store } = useContext(StoreContext);
  const { pathname } = location;
  const { stories } = store;
  const [story] = stories.filter(
    ({ href }) => href === pathname.endsWith(href)
  );

  if (!story) {
    return null;
  }

  return (
    <Fragment>
      <SEO title={story.title} description={story.description} />
      <Container>
        <MainContent>
          <Img
            fluid={{ src: story.image }}
            key={story.id}
            alt={`${story.title} - ${story.shortDescription}`}
          />
        </MainContent>
        <TwoColumnGrid>
          <GridLeft>
            {story.images.map(image => (
              <Img
                fluid={{ src: image.src }}
                key={image.id}
                alt={story.title}
              />
            ))}
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
