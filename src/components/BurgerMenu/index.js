import React from 'react';
import PropTypes from 'prop-types';

import {
  BurgerMenuFirstLine,
  BurgerMenuLine,
  BurgerMenuLastLine,
  BurgerMenuButton,
} from './styles';

const BurgerMenu = ({ onClick, isMenuOpen }) => {
  return (
    <BurgerMenuButton onClick={onClick}>
      <BurgerMenuFirstLine isMenuOpen={isMenuOpen} />
      <BurgerMenuLine isMenuOpen={isMenuOpen} />
      <BurgerMenuLastLine isMenuOpen={isMenuOpen} />
    </BurgerMenuButton>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
