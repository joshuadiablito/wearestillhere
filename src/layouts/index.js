import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import ContextProvider from '~/provider/ContextProvider';
import { GlobalStyle } from '~/utils/styles';
import Navigation from '~/components/Navigation';

import './styles.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;
const Footer = styled.footer`
  font-size: 0.8rem;
  margin-top: 80px;
`;
const Layout = ({ children }) => {
  const {
    site,
    bop: { childImageSharp: bop },
    biuob: { childImageSharp: biuob },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      bop: file(relativePath: { eq: "bristol-photo-festival.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      biuob: file(relativePath: { eq: "brigstow-institute-uob.png" }) {
        childImageSharp {
          fixed(height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ContextProvider>
      <GlobalStyle />
      <Navigation siteTitle={site.siteMetadata.title} />
      <Wrapper>
        {children}
        <Footer>
          <p>We Are Still Here &copy;</p>
          <a
            href="http://www.bristolphotofestival.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image fixed={bop.fixed} alt="Bristol Photo Festival" />
          </a>
          <a
            href="http://www.bristol.ac.uk/brigstow/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              fixed={biuob.fixed}
              alt="Brigsto Institute - University of Bristol"
            />
          </a>
        </Footer>
      </Wrapper>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
