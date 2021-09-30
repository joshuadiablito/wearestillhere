import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, ogImage, title }) {
  const newTitle = `${title} | We Are Still Here - Photography Exhibition in Bristol, UK`;

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={newTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: newTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: 'og:image',
                content: `https://www.wearestillhere.net${ogImage}`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: newTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: 'viewport',
                content:
                  'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no,viewport-fit=cover',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Arimo&display=swap"
              rel="preload"
              as="style"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
              rel="preload"
              as="style"
            />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-Y9J17LH8K6"
            />
            <script>
              {`
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              };

              gtag('js', new Date());

              gtag('config', 'G-Y9J17LH8K6');
              `}
            </script>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  ogImage: '/logo-white.png',
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  ogImage: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
