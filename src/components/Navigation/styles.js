import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 1.45rem;

  margin: 0 auto 1.45rem auto;
  max-width: 960px;
`;

export const MenuOverlay = styled.ul`
  -webkit-font-smoothing: antialiased;
  background: #7cceb1;
  box-sizing: content-box;
  list-style-type: none;
  margin: -24px 0 0 0;
  padding-top: 20px;
  padding: 40px;
  position: absolute;
  right: -100px;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  width: 300px;
  z-index: 2;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `
      opacity: 1;
      transform: none;
      `
      : ''}

  @media (min-width: ${breakpoints.l}px) {
    background: none;
    margin: 0 0 0 20px;
    padding: 0;
    position: relative;
    right: auto;
    transform-origin: none;
    transform: none;
    width: 800px;

    & li {
      display: inline-block;
    }
  }
`;

export const MenuLink = styled(Link)`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  padding: 0 12px;
  text-decoration: none;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`;
