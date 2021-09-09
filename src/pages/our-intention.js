import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import SEO from '~/components/seo';

const ImageContainer = styled.div`
  max-width: 400px;
`;
const OurIntentionPage = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query IntentionImageQuery {
      allImageSharp(
        filter: { fluid: { originalName: { eq: "our-intention.jpg" } } }
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
        title="Our Intention"
        keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
      />
      <h1>Our Intention</h1>
      <p>
        We Are Still Here invites you into the homes of the HIV/AIDS community.
      </p>
      <p>
        Our project focuses on the personal lived experiences of people living
        with HIV. In particular, we use the project to document, both
        photographically and in audio interviews, the spaces in which people
        living with HIV feel &#x2018;at home&#x2019;. We conceptualise home here
        as something both spatial and spiritual; a &#x2018;place&#x2019; of
        comfort, &#x2018;family&#x2019; and safety. In the project, people
        living with HIV share their experiences on how the virus impacted their
        lives, their relationships and their personal spaces. Through
        storytelling and visualisation an intimate insight into the lives of our
        participants is revealed.
      </p>
      <p>
        &#x2018;We Are Still Here&#x2019; is intended as a celebration of the
        lives and struggles of those living with HIV during a period that has
        witnessed the virus fade from public consciousness. In the midst of one
        global pandemic, we have chosen to concentrate on another that has
        fallen from view. While people living with HIV are now largely invisible
        in countries like the UK, the pandemic is still very much alive. Nearly
        37 million people in the world are living with HIV and still have to
        deal with prejudice that is attendant with forms of exclusion. If the
        full scale of the pandemic is to be addressed, then the HIV-community
        must be made visible once again.
      </p>
      <p>
        In this project, we are using photography and the participants&#x2019;
        own stories, told in their own voices, as means to highlight that the
        HIV-community is &#x2018;still here&#x2019;. We see photography as a
        tool for empowerment. By creating images, narratives come to life. These
        images have power. They demonstrate and shape identity. Importantly,
        using these images in conjunction with the participants&#x2019; stories
        (and the stories of their loved ones), we endeavour to help shape the
        narrative surrounding people living with HIV in the 2020s.
      </p>
      <p>
        We offer our thanks and gratitude to our participants as well as The
        Brigstow Institute at the University of Bristol and the Bristol Photo
        Festival for recognising our project&#x2019;s worth and providing both
        financial, moral, and logistical support.
      </p>
      <ImageContainer>
        <Image fluid={page.fluid} alt="Our Intention" />
      </ImageContainer>
    </Fragment>
  );
};

export default OurIntentionPage;
