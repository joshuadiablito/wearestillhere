import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import { Title } from '~/utils/styles';
import SEO from '~/components/seo';

const ImageContainer = styled.div`
  max-width: 400px;
`;
const OurParticipantsPage = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query ParticipantsImageQuery {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "our-participants.jpg" } } }
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
        title="Our Participants"
        keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
        ogImage={page.fluid.src}
      />
      <Title>Our Participants</Title>
      <p>
        &lsquo;We Are Still Here&rsquo; is a project that cannot live without
        its participants. Therefore we want to invite you to share your
        narrative and experience about HIV/AIDS and help create more a diverse
        perception about living with the virus. We also welcome all of those
        within the HIV-negative world who have been affected or those of you who
        have questions. We are still here and we are everybody. We are only the
        beginning. Inclusivity is a journey and it’s something you can help
        navigate.
      </p>
      <ImageContainer>
        <Image fluid={page.fluid} alt="Our Participants" />
      </ImageContainer>
    </Fragment>
  );
};

export default OurParticipantsPage;
