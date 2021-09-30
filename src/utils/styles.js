import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        font-family: 'Arimo', 'Montserrat', sans-serif;
      }
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
);

export const Title = styled.h1`
  margin: 0 0 12px;
`;

export const Img = styled(Image)`
  max-width: 100 %;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.s}px) {
    display: block;
  }
`;

export const GridLeft = styled.div`
  grid-area: left;
`;

export const GridRight = styled.div`
  grid-area: right;
`;

export const Block = styled.div`
  display: block;
  height: 12px;
  width: 100%;
  content: '';
`;
export const MainContent = styled.main`
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-bottom: 20px;
  }
`;
