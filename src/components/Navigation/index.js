import { Global, css } from '@emotion/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../images/logo-small.svg';

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
          body {
            overflow-x: hidden;
          }
        `}
      />
      <a href="/" title="We Are Still Here">
        <Logo />
      </a>
      <BurgerMenu onClick={handleClick} isMenuOpen={isMenuOpen} />
      <MenuOverlay isMenuOpen={isMenuOpen}>
        <li>
          <MenuLink to="/about">About</MenuLink>
        </li>
        <li>
          <MenuLink to="/team">Team</MenuLink>
        </li>
        <li>
          <MenuLink to="/contact">Contact</MenuLink>
        </li>
        <li>
          <MenuLink to="/participate">Participate</MenuLink>
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
