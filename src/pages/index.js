import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <StoryTiles />
    <StoryTiles />
    <StoryTiles />
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
