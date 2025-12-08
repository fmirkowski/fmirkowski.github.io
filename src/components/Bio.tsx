import styled from 'styled-components';

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

const EmailText = styled.span`
  color: #111;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`;

const InlineLinkish = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
`;

const Bio = () => {
  const emailDisplay = 'hi [at] mirkowski [dot] dev';
  const githubDisplay = 'github [dot] com / fmirkowski';
  const xDisplay = 'x [dot] com / FranekMirko';

  return (
    <Container>
      <Paragraph className="mb-2">
        hi. i'm Franek.
      </Paragraph>

      <Paragraph className="mb-6">
        i'm 16.
      </Paragraph>

      <Paragraph>
        at 15, i joined salespatriot (yc W25), a defense startup, as one of the first engineers.
      </Paragraph>

      <Paragraph>
        i really like deep learning research.
      </Paragraph>

      <Paragraph>
        i dropped out of high school.
      </Paragraph>

      <Paragraph>
        i now do research eng @ ElevenLabs.
      </Paragraph>

      <Paragraph className="mt-10">
        find me on{' '}
        {githubDisplay}
        {', '}
        {xDisplay}
        {' '}or email me at{' '}
        <EmailText>{emailDisplay}</EmailText>.
      </Paragraph>
    </Container>
  );
};

export default Bio;
