import React from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>Hi people</h1>
    <p>Welcome to We Are Still Here Photography Exhibition.</p>
    <StoryTiles />
  </>
);

export default IndexPage;
