import styled from '@emotion/styled';
import React from 'react';

import { breakpoints } from '../../utils/styles';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

const StoryTile = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const StoryTilesLoader = () => {
  return (
    <Grid>
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
    </Grid>
  );
};

export default StoryTilesLoader;
