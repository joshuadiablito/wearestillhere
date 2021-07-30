import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`;

export const MenuOverlay = styled.ul`
  -webkit-font-smoothing: antialiased;
  background: #7cceb1;
  box-sizing: content-box;
  list-style-type: none;
  margin: -24px 0 0 0;
  padding: 20px;
  position: absolute;
  right: 0;
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  width: 300px;
  z-index: 5;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `
      opacity: 1;
      transform: none;
      `
      : ''}
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
