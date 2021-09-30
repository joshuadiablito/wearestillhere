import React, { Fragment } from 'react';
import loadable from '@loadable/component';

import SEO from '~/components/seo';
import { Title } from '~/utils/styles';
import { ProjectInfo } from '../templates/StoryPage/styles';

const StoryTiles = loadable(() => import('../components/StoryTiles'));

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Our Project"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <Title>Our Project</Title>
    <ProjectInfo>
      Our project aims to show the world how the HIV/AIDS community curates
      their own living spaces to benefit mental health and well-being.
    </ProjectInfo>
    <ProjectInfo>
      We want also to prove that it&rsquo;s a condition that could affect each
      and every one of us, yet can also be managed so successfully that it
      proves no hindrance to a long and well-lived life.
    </ProjectInfo>
    <ProjectInfo>
      We invite you to meet our brave participants who have come forward to talk
      candidly about their lived experiences with the virus known as HIV...
    </ProjectInfo>
    <StoryTilesLoader />
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
