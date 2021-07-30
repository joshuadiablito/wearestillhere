import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { breakpoints } from '~/utils/styles';
import SEO from '~/components/seo';

const Left = styled.div`
  float: left;
  padding-right: 12px;

  @media (max-width: ${breakpoints.s}px) {
    float: none;
    padding-right: 0;
    width: 100%;
  }
`;
const Right = styled.div`
  float: right;
  padding-left: 12px;

  @media (max-width: ${breakpoints.s}px) {
    float: none;
    padding-left: 0;
    width: 100%;
  }
`;
const Caption = styled.span`
  font-size: 0.7rem;
  display: block;
`;
const OurTeamPage = () => {
  const {
    site,
    team: { nodes: team },
  } = useStaticQuery(graphql`
    query TeamQuery {
      team: allFile(filter: { relativeDirectory: { eq: "team" } }) {
        nodes {
          id
          childImageSharp {
            width: fixed(width: 300) {
              ...GatsbyImageSharpFixed
              originalName
            }
            height: fixed(height: 300) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);
  const [martin] = team.filter(
    ({ childImageSharp: { width } }) => width.originalName === 'martin.jpg'
  );

  const [mareike] = team.filter(
    ({ childImageSharp: { width } }) => width.originalName === 'mareike.jpg'
  );

  const [adrian] = team.filter(
    ({ childImageSharp: { width } }) => width.originalName === 'adrian.jpg'
  );

  return (
    <Fragment>
      <SEO
        title="Our Team"
        keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
      />
      <h1>Our Team</h1>
      <p>
        What unites us as a team is our interest in storytelling and the
        construction and power of narratives.
      </p>
      <Right>
        <Image fixed={mareike.childImageSharp.width} alt="Mareike Günsche" />
        <Caption>Mareike Günsche</Caption>
      </Right>
      <p>
        <strong>Mareike Günsche:</strong> is a London-based photographer and
        educator focusing on human rights, gender issues and social change, with
        a special interest in photography’s ability to empower. Her method is
        participatory photography to create visibility for a variety of
        perspectives. Since 2019 she is senior lecturer in photography at the
        State University of Arts in Ulan Bator, Mongolia. Her project
        “Dragkings” was awarded the Canon Award for young Photographers; her
        series “You Are My Sister” about a Mongolian transgender woman won “The
        Other Hundred” award. Her project “Our Voice” helped to create
        visibility of domestic violence in Mongolia and contributed to the
        establishment of a law that recognises domestic violence as a crime. Her
        work has been exhibited in Europe, Asia and the States and published in
        international media. More information can be found{' '}
        <a href="http://www.aspect-us.com/" rel="noreferrer" target="_blank">
          on her homepage
        </a>
      </p>
      <Left>
        <Image fixed={adrian.childImageSharp.height} alt="Adrian Flint" />
        <Caption>Adrian Flint</Caption>
      </Left>
      <p>
        <strong>Adrian Flint:</strong> is a Senior Lecturer in the School of
        Sociology, Politics and International Relations at the University of
        Bristol. Adrian has a long-standing interest in the politics of HIV &
        AIDS and has published extensively on the subject. He is particularly
        interested in representations of HIV & AIDS and how these are
        articulated in the media and popular culture. His most recent work,
        using postcolonial theory, looks at the need to decolonise narratives of
        health and sexuality in a development context. More information can be
        found{' '}
        <a
          href="https://research-information.bris.ac.uk/en/persons/adrian-g-flint"
          rel="noreferrer"
          target="_blank"
        >
          on his homepage
        </a>
      </p>
      <Right>
        <Image fixed={martin.childImageSharp.width} alt="Martin Burns" />
        <Caption>Martin Burns</Caption>
      </Right>
      <p>
        <strong>Martin Burns:</strong> is a writer, HIV/AIDS activist and
        equality advocate who was born in Shakespeare’s County and continued his
        own writing at Bournemouth University where he gained a BA Hons in
        Scriptwriting for Film & TV. With his HIV diagnosis, Martin found his
        true voice. He had a tribe to write for, especially those too scared to
        speak out thanks to the persistent and insidious stigmas and
        misinformation that help keep anachronistic prejudices alive. He works
        freelance for HIV charities in the South-West, such as The Brigstowe
        Project, for whom he was a keynote speaker in 2019’s World AIDS Day. He
        has been involved in Awareness campaigns for the likes of The Terrence
        Higgins’ Trust, Green Carnation Theatre Company and The Bristol Post, as
        well as part of The Brigstowe Project’s national U=U Campaign. His
        activism informs much of his written work, too. He is currently
        compiling his N/F novel about the truth of being an HIV+ individual in
        2020 and how life as an outcast has defined him and inspired his need
        for inclusion. More information can be found{' '}
        <a
          href="http://www.martinburnswriteractivist.co.uk"
          rel="noreferrer"
          target="_blank"
        >
          on his homepage
        </a>
      </p>
      <div style={{ clear: 'both' }} />
    </Fragment>
  );
};

export default OurTeamPage;
