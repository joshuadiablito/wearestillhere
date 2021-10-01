import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

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
  background-color: #dddbdd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 220px;
  overflow: hidden;
  padding-bottom: 12px;
  position: relative;
  width: 300px;

  ::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }
`;

const StoryTilesLoader = () => {
  return (
    <Grid>
      <Global
        styles={css`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
          @keyframes load {
            from {
              left: -150px;
            }
            to {
              left: 100%;
            }
          }
        `}
      />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
      <StoryTile />
    </Grid>
  );
};

export default StoryTilesLoader;
