import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Title } from '~/utils/styles';

import StoreContext from '../../context/StoreContext';
import { Img } from '../../utils/styles';

import { Grid, StoryTile, TitleBlock } from './styles';

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
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);

  return (
    <Grid>
      {stories &&
        stories.map(({ id, href, title, mainImage, shortDescription }) => {
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
                  imgStyle={{
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                  }}
                />
                <TitleBlock>{title}</TitleBlock>
              </Link>
            </StoryTile>
          );
        })}
    </Grid>
  );
};

export default StoryTiles;
