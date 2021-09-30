import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import { Title } from '~/utils/styles';
import SEO from '~/components/seo';

const ImageContainer = styled.div`
  max-width: 400px;
`;
const OurDetailsPage = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query DetailsImageQuery {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "our-details.jpg" } } }
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
        title="Our Details"
        keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
        ogImage={page.fluid.src}
      />
      <Title>Our Details</Title>
      <p>
        Please get in touch with us if you have any questions. Also please reach
        out to us if you want to participate.{' '}
      </p>
      <p>
        If you would like to share the images, we would appreciate it if you got
        in touch with us beforehand.{' '}
      </p>
      <p>
        You can reach us:
        <br />
        via email:{' '}
        <a href="mailto:stories@wearestillhere.net">
          stories@wearestillhere.net
        </a>
        <br />
        via{' '}
        <a
          href="https://www.facebook.com/wearestillherestories"
          rel="noreferrer"
          target="_blank"
        >
          Facebook
        </a>
        <br />
        via{' '}
        <a
          href="https://www.instagram.com/wearestillherestories/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
      <ImageContainer>
        <Image fluid={page.fluid} alt="Our Details" />
      </ImageContainer>
    </Fragment>
  );
};

export default OurDetailsPage;
