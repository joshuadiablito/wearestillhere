import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { breakpoints } from '../../utils/styles';

export const Wrapper = styled.div`
  background: black;
  margin-bottom: 1.45rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`;

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
`;
