import React, { Fragment } from 'react';

import SEO from '~/components/seo';

const ParticipatePage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>Participate</h1>
    <p>
      &lsquo;We Are Still Here&rsquo; is a project that cannot live without its
      participants. Therefore we want to invite you to share your narrative and
      experience about HIV/AIDS and help create more a diverse perception about
      living with the virus. We also welcome all of those within the
      HIV-negative world who have been affected or those of you who have
      questions. We are still here and we are everybody. We are only the
      beginning. Inclusivity is a journey and it’s something you can help
      navigate.
    </p>
  </Fragment>
);

export default ParticipatePage;
