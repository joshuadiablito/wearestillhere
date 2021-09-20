import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import SEO from '~/components/seo';

const ImageContainer = styled.div`
  max-width: 400px;
`;
const OurResourcesPage = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query ResourcesImageQuery {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "our-resources.jpg" } } }
      ) {
        nodes {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `);
  const [page] = nodes;

  return (
    <Fragment>
      <SEO
        title="Our Resources"
        keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
      />
      <h1>Our Resources</h1>
      <p>&lsquo;We Are Still Here&rsquo; provide resources</p>

      <ImageContainer>
        <Image fluid={page.fluid} alt="Our Resources" />
      </ImageContainer>
    </Fragment>
  );
};

export default OurResourcesPage;
