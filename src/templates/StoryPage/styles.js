import styled from '@emotion/styled';

export const StoryTitle = styled.h1`
  font-size: 1.5rem;
  margin: 12px 0;
  word-wrap: break-word;
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 400;
  line-height: 1.4;
`;

export const StoryDescription = styled.div`
  font-family: 'Helvetica', 'Helvetica', sans-serif;
  font-weight: 300;
  max-height: 400px;
  overflow-y: auto;
`;

export const Breadcrumbs = styled.aside`
  font-size: 0.9rem;
  a {
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;
