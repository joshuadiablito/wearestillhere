import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import ContextProvider from '~/provider/ContextProvider';
import {
  breakpoints,
  Block,
  GlobalStyle,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles';
import Navigation from '../components/Navigation';

import './styles.css';

const links = {
  'aspectus.jpg': {
    href: 'https://aspect-us.com/',
    title: 'Aspectus',
  },
  'bristol-photo-festival.png': {
    href: 'http://www.bristolphotofestival.org/',
    title: 'Bristol Photo Festival',
  },
  'brigstow-institute-uob.png': {
    href: 'http://www.bristol.ac.uk/brigstow/',
    title: 'Brigstow Institute - University of Bristol',
  },
  'diablito-development.png': {
    href: 'https://www.diablitodevelopment.com',
    title: 'Diablito Development',
  },
  'scioltio.png': {
    href: '',
    title: 'Scioltio Audio & Visual',
  },
  'facebook.png': {
    href: 'https://www.facebook.com/wearestillherestories',
    title: 'Facebook',
  },
  'instagram.png': {
    href: 'https://www.instagram.com/wearestillherestories/',
    title: 'Instagram',
  },
  'youtube.png': {
    href: 'https://www.youtube.com/channel/UC3OMFFNjJTLsQPyvt58t_AA',
    title: 'Youtube',
  },
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;
const Footer = styled.footer`
  font-size: 0.8rem;
  margin-top: 20px;
`;
const FloatRight = styled.div`
  float: right;

  @media (max-width: ${breakpoints.s}px) {
    float: none;
    padding-top: 0;
  }
`;
const Layout = ({ children }) => {
  const {
    social: { nodes: social },
    sponsors: { nodes: sponsors },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      social: allFile(filter: { relativeDirectory: { eq: "social" } }) {
        nodes {
          id
          childImageSharp {
            fixed(height: 40) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
      sponsors: allFile(filter: { relativeDirectory: { eq: "sponsors" } }) {
        nodes {
          id
          childImageSharp {
            fixed(height: 64) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);

  const [scioltio, bristol, brigstow, aspectus, diablito] = sponsors;
  const newSponsors = [bristol, brigstow, aspectus, diablito, scioltio];

  return (
    <ContextProvider>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        {children}
        <Block />
        <Footer>
          <TwoColumnGrid>
            <GridLeft>
              {newSponsors.map(({ childImageSharp: { fixed } }) => {
                const { href, title } = links[fixed.originalName];

                if (href) {
                  return (
                    <a
                      href={href}
                      key={fixed.originalName}
                      target="_blank"
                      rel="noreferrer"
                      style={{ paddingBottom: '12px', paddingRight: '12px' }}
                    >
                      <Image fixed={fixed} alt={title} />
                    </a>
                  );
                }

                return (
                  <div
                    key={fixed.originalName}
                    style={{ paddingBottom: '12px', paddingRight: '12px' }}
                  >
                    <Image fixed={fixed} alt={title} />
                  </div>
                );
              })}
            </GridLeft>
            <GridRight>
              <FloatRight>
                {social.map(({ childImageSharp: { fixed } }) => {
                  const link = links[fixed.originalName];

                  return (
                    <a
                      href={link.href}
                      key={fixed.originalName}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        paddingRight: '12px',
                        justifySelf: 'end',
                      }}
                    >
                      <Image fixed={fixed} alt={link.title} />
                    </a>
                  );
                })}
              </FloatRight>
            </GridRight>
          </TwoColumnGrid>
          <p>
            &copy; We Are Still Here 2021 |{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </Footer>
      </Wrapper>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
