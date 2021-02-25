import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const ContactPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>Contact</h1>
    <p>
      Please get in touch with us if you have any questions. Also please reach
      out to us if you want to participate. If you would like to share the
      images, we would appreciate it if you got in touch with us beforehand. You
      can reach us:
      <br />
      via email:{' '}
      <a href="mailto:stories@wearestillhere.net">stories@wearestillhere.net</a>
      <br />
      via{' '}
      <a href="https://www.facebook.com/wearestillherestories" target="_blank">
        Facebook
      </a>
      <br />
      via{' '}
      <a
        href="https://www.instagram.com/wearestillherestories/"
        target="_blank"
      >
        Instagram
      </a>
    </p>
    <StoryTiles />
  </Fragment>
);

export default ContactPage;
