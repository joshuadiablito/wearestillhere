import styled from '@emotion/styled';

import { breakpoints } from '../../utils/styles';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StoryTile = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export const Title = styled.span`
  display: block;
  font-weight: 300;
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
`;

export const ShortDescription = styled.span`
  font-size: 1rem;
  font-weight: 0;
`;
