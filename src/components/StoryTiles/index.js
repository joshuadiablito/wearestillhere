import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import StoreContext from '../../context/StoreContext';
import { Img } from '../../utils/styles';

import { Grid, ShortDescription, StoryTile, Title } from './styles';

const StoryTiles = () => {
  const {
    store: { stories },
  } = useContext(StoreContext);

  const {
    allImageSharp: { edges },
  } = useStaticQuery(graphql`
    query images {
      allImageSharp {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  console.log({ stories });

  return (
    <Grid>
      {stories &&
        stories.map(({ id, href, title, smallImage, shortDescription }) => {
          console.log('hellyaeah', { edges });
          const [image] = edges.filter(
            ({ node }) => node.fluid.originalName === smallImage
          );

          console.log({ image });

          return (
            <StoryTile key={id}>
              <Link to={`/story/${href}`}>
                <Img fluid={image.node.fluid} alt={title} />
              </Link>
              <Title>{title}</Title>
              <ShortDescription>{shortDescription}</ShortDescription>
            </StoryTile>
          );
        })}
    </Grid>
  );
};

export default StoryTiles;
