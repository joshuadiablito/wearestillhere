import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Our Project"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
