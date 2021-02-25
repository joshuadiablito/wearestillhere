import styled from '@emotion/styled';
import { Link } from 'gatsby';

import MenuIcon from '../../images/menuIcon.svg';
import CloseIcon from '../../images/closeIcon.svg';
import { breakpoints } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto 1.45rem auto;
  max-width: 960px;
`;

export const OpenMenuButton = styled(MenuIcon)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  width: 40px;
  height: 40px;
  user-select: none;
  -webkit-touch-callout: none;
`;
export const CloseMenuButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  width: 40px;
  height: 40px;
  user-select: none;
  -webkit-touch-callout: none;
`;

export const MenuOverlay = styled.ul`
  box-sizing: content-box;
  position: absolute;
  width: 300px;
  margin: -20px 0 0 0;
  padding: 40px;
  padding-top: 20px;
  right: -100px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `transform: none;
  opacity: 1;`
      : ''}

  @media (min-width: ${breakpoints.l}px) {
    transform: none;
    background: none;
    position: relative;
    margin: 0;
    padding: 0;
    width: 800px;
    right: auto;
    transform-origin: none;

    & li {
      display: inline-block;
    }
  }
`;

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 12px;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`;

export const Row = styled.div``;
