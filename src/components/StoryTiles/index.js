import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { Img } from '../../utils/styles';

import { Grid, ShortDescription, StoryTile, Title } from './styles';

const StoryTiles = () => {
  const { storyTiles } = useStaticQuery(
    graphql`
      query {
      }
    `
  );

  return (
    <Grid>
      {storyTiles.map(
        ({ node: { id, href, title, image, shortDescription } }) => (
          <StoryTile key={id}>
            <Link to={`/story/${href}`}>
              <Img fluid={image.fluid} alt={handle} />
            </Link>
            <Title>{title}</Title>
            <ShortDescription>{shortDescription}</ShortDescription>
          </StoryTile>
        )
      )}
    </Grid>
  );
};

export default StoryTiles;
