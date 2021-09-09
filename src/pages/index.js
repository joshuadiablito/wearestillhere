import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';
import { Breadcrumbs } from '../templates/StoryPage/styles';

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Our Project"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <Breadcrumbs>Our Project</Breadcrumbs>
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
