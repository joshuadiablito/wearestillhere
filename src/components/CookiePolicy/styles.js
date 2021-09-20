import styled from '@emotion/styled';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  border-top: 2px solid black;
  bottom: 0;
  z-index: 10;
  font-size: 0.8rem;
`;
export const Centred = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 12px;
  line-height: 24px;
`;

export const Button = styled.button`
  background: white;
  border: 2px solid black;
  font-size: 0.8rem;
  padding: 4px 8px;
  margin: -4px 0 0 0;
  cursor: pointer;
`;
