import styled from '@emotion/styled';

import { breakpoints } from '../../utils/styles';

export const BurgerMenuButton = styled.button`
  border: 0;
  background: none;
  position: absolute;
  right: 20px;
  top: 28px;
  outline: none;
  z-index: 3;

  @media (min-width: ${breakpoints.l}px) {
    display: none;
  }
`;
export const BurgerMenuLine = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #000;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);`}
`;
export const BurgerMenuFirstLine = styled(BurgerMenuLine)`
  transform-origin: 0% 0%;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `opacity: 1;
    transform: rotate(45deg) translate(-2px, -3px);`
      : ''}
`;

export const BurgerMenuLastLine = styled(BurgerMenuLine)`
  transform-origin: 0% 100%;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `opacity: 1;
  transform: rotate(-45deg) translate(0, 2px);`
      : ''}
`;
