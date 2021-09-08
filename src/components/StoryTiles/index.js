import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import StoreContext from '../../context/StoreContext';
import { Img } from '../../utils/styles';

import { Grid, StoryTile, Title } from './styles';

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

  edges.forEach(({ node }) => {
    console.log(node.fluid);
  });
  return (
    <Grid>
      {stories &&
        stories.map(({ id, href, title, mainImage, shortDescription }) => {
          console.log({ mainImage });
          const [image] = edges.filter(
            ({ node }) => node.fluid.originalName === mainImage
          );

          return (
            <StoryTile key={id}>
              <Link
                to={`/story/${href}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Img
                  fluid={image.node.fluid}
                  alt={title}
                  imgStyle={{
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                  }}
                />
                <Title>{title}</Title>
              </Link>
            </StoryTile>
          );
        })}
    </Grid>
  );
};

export default StoryTiles;
