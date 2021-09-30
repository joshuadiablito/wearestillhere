import styled from '@emotion/styled';

import { breakpoints } from '../../utils/styles';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const StoryTile = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const TitleBlock = styled.span`
  display: block;
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding-top: 12px;
`;

export const ShortDescription = styled.span`
  font-size: 1rem;
  font-weight: 0;
`;
