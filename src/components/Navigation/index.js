import React from 'react';
import PropTypes from 'prop-types';

import { Container, MenuLink, Wrapper } from './styles';

const Navigation = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Container>
        <MenuLink to="/">{siteTitle}</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/team">Team</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
        <MenuLink to="/participate">Participate</MenuLink>
      </Container>
    </Wrapper>
  );
};

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
