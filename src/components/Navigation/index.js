import { Global, css } from '@emotion/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../images/logo-small.svg';

import { breakpoints } from '../../utils/styles';
import BurgerMenu from '../BurgerMenu';

import { Container, MenuLink, MenuOverlay } from './styles';

const Navigation = ({ logo, siteTitle }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleClick = React.useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

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

          @media (min-width: ${breakpoints.l}px) {
            a.active {
              color: #000;
              text-decoration: underline;
            }
          }
        `}
      />
      <a href="/" title="We Are Still Here">
        <Logo />
      </a>
      <BurgerMenu onClick={handleClick} isMenuOpen={isMenuOpen} />
      <MenuOverlay isMenuOpen={isMenuOpen}>
        <li>
          <MenuLink to="/" activeClassName="active">
            Home
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/about/" activeClassName="active">
            About
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/team/" activeClassName="active">
            Team
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/participate/" activeClassName="active">
            Participate
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/contact/" activeClassName="active">
            Contact
          </MenuLink>
        </li>
      </MenuOverlay>
    </Container>
  );
};

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
