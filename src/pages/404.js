import React, { Fragment } from 'react';

import { Title } from '~/utils/styles';
import SEO from '~/components/seo';

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <p>You just found a page that doesn&#39;t exist... sad face emoji.</p>
  </Fragment>
);

export default NotFoundPage;
