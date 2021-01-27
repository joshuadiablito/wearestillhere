import React, { useContext } from 'react';
import { Link } from 'gatsby';

import StoreContext from '../../context/StoreContext';
import { Img } from '../../utils/styles';

import { Grid, ShortDescription, StoryTile, Title } from './styles';

const StoryTiles = () => {
  const { stories } = useContext(StoreContext);

  console.log({ stories });

  return (
    <Grid>
      {stories &&
        stories.map(({ id, href, title, image, shortDescription }) => (
          <StoryTile key={id}>
            <Link to={`/story/${href}-${id}`}>
              <Img fluid={image} alt={title} />
            </Link>
            <Title>{title}</Title>
            <ShortDescription>{shortDescription}</ShortDescription>
          </StoryTile>
        ))}
    </Grid>
  );
};

export default StoryTiles;
