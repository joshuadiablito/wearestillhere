import React, { Fragment } from 'react';

import SEO from '~/components/seo';

const ContactPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>Contact</h1>
    <p>
      Please get in touch with us if you have any questions. Also please reach
      out to us if you want to participate.{' '}
    </p>
    <p>
      If you would like to share the images, we would appreciate it if you got
      in touch with us beforehand.{' '}
    </p>
    <p>
      You can reach us:
      <br />
      via email:{' '}
      <a href="mailto:stories@wearestillhere.net">stories@wearestillhere.net</a>
      <br />
      via{' '}
      <a
        href="https://www.facebook.com/wearestillherestories"
        rel="noreferrer"
        target="_blank"
      >
        Facebook
      </a>
      <br />
      via{' '}
      <a
        href="https://www.instagram.com/wearestillherestories/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </p>
  </Fragment>
);

export default ContactPage;
