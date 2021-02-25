import React, { Fragment } from 'react';

import SEO from '~/components/seo';
import StoryTiles from '~/components/StoryTiles';

const TeamPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={['photography', 'exhibition', 'HIV', 'Bristol']}
    />
    <h1>The Team</h1>
    <p>
      What unites us as a team is our interest in storytelling and the
      construction and power of narratives.
    </p>
    <p>
      <strong>Mareike Günsche:</strong> is a London-based photographer and
      educator focusing on human rights, gender issues and social change, with a
      special interest in photography’s ability to empower. Her method is
      participatory photography to create visibility for a variety of
      perspectives. Since 2019 she is senior lecturer in photography at the
      State University of Arts in Ulan Bator, Mongolia. Her project “Dragkings”
      was awarded the Canon Award for young Photographers; her series “You Are
      My Sister” about a Mongolian transgender woman won “The Other Hundred”
      award. Her project “Our Voice” helped to create visibility of domestic
      violence in Mongolia and contributed to the establishment of a law that
      recognises domestic violence as a crime. Her work has been exhibited in
      Europe, Asia and the States and published in international media. More
      information can be found{' '}
      <a href="http://www.aspect-us.com/" target="_blank">
        on her homepage
      </a>
    </p>
    <p>
      <strong>Adrian Flint:</strong> is a Senior Lecturer in the School of
      Sociology, Politics and International Relations at the University of
      Bristol. Adrian has a long-standing interest in the politics of HIV & AIDS
      and has published extensively on the subject. He is particularly
      interested in representations of HIV & AIDS and how these are articulated
      in the media and popular culture. His most recent work, using postcolonial
      theory, looks at the need to decolonise narratives of health and sexuality
      in a development context. More information can be found{' '}
      <a
        href="https://research-information.bris.ac.uk/en/persons/adrian-g-flint"
        target="_blank"
      >
        on his homepage
      </a>
    </p>
    <p>
      <strong>Martin Burns:</strong> is a writer, HIV/AIDS activist and equality
      advocate who was born in Shakespeare’s County and continued his own
      writing at Bournemouth University where he gained a BA Hons in
      Scriptwriting for Film & TV. With his HIV diagnosis, Martin found his true
      voice. He had a tribe to write for, especially those too scared to speak
      out thanks to the persistent and insidious stigmas and misinformation that
      help keep anachronistic prejudices alive. He works freelance for HIV
      charities in the South-West, such as The Brigstowe Project, for whom he
      was a keynote speaker in 2019’s World AIDS Day. He has been involved in
      Awareness campaigns for the likes of The Terrence Higgins’ Trust, Green
      Carnation Theatre Company and The Bristol Post, as well as part of The
      Brigstowe Project’s national U=U Campaign. His activism informs much of
      his written work, too. He is currently compiling his N/F novel about the
      truth of being an HIV+ individual in 2020 and how life as an outcast has
      defined him and inspired his need for inclusion. More information can be
      found{' '}
      <a href="http://www.martinburnswriteractivist.co.uk" target="_blank">
        on his homepage
      </a>
    </p>
    <StoryTiles />
  </Fragment>
);

export default TeamPage;
