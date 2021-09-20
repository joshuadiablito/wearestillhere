import { Global, css } from '@emotion/react';
import React, { useCallback, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import BurgerMenu from '../BurgerMenu';

import { Container, MenuLink, MenuOverlay, MenuA } from './styles';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);
  const closeNavigation = useCallback(() => {
    setMenuOpen(false);
  }, []);
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: { name: { eq: "logo" } }) {
        nodes {
          id
          name
          absolutePath
          childImageSharp {
            small: fixed(height: 68) {
              ...GatsbyImageSharpFixed
              originalName
            }
            large: fixed(height: 300) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);
  const [logo] = nodes;

  return (
    <Container>
      <Global
        styles={css`
          #___gatsby {
            overflow-x: hidden;
            position: relative;
          }
          a {
            color: #000;
            font-weight: bold;
          }
          a.active {
            color: #fff;
            font-weight: bolder;
          }
        `}
      />
      <a
        href="/"
        title="We Are Still Here - Photography Exhibition in Bristol, UK"
      >
        <Image fixed={logo.childImageSharp.small} />
      </a>
      <BurgerMenu onClick={handleClick} isMenuOpen={isMenuOpen} />
      <MenuOverlay isMenuOpen={isMenuOpen}>
        <li>
          <MenuLink to="/" activeClassName="active" onClick={closeNavigation}>
            Our Project
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/our-intention/"
            activeClassName="active"
            onClick={closeNavigation}
          >
            Our Intention
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/our-team/"
            activeClassName="active"
            onClick={closeNavigation}
          >
            Our Team
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/our-participants/"
            activeClassName="active"
            onClick={closeNavigation}
          >
            Our Participants
          </MenuLink>
        </li>
        <li>
          <MenuA
            href="http://www.bristolphotofestival.org/we-are-still-here/"
            activeClassName="active"
            onClick={closeNavigation}
            target="_blank"
          >
            Our Exhibition
          </MenuA>
        </li>
        {/*<li>
          <MenuLink
            to="/our-resources/"
            activeClassName="active"
            onClick={closeNavigation}
          >
            Our Resources
          </MenuLink>
        </li>*/}
        <li>
          <MenuLink
            to="/our-details/"
            activeClassName="active"
            onClick={closeNavigation}
          >
            Our Details
          </MenuLink>
        </li>
      </MenuOverlay>
    </Container>
  );
};

export default Navigation;
