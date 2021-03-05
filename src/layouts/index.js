import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import ContextProvider from '~/provider/ContextProvider';
import { GlobalStyle } from '~/utils/styles';
import Navigation from '~/components/Navigation';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;
const Footer = styled.footer`
  font-size: 0.8rem;
`;
const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        <br />
        <br />
        <Footer>We Are Still Here &copy; {new Date().getFullYear()} </Footer>
      </Wrapper>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
