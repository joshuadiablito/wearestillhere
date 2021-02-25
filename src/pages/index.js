import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>We Are Still Here</h1>
    <p>Welcome to We Are Still Here Photography Exhibition.</p>
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
