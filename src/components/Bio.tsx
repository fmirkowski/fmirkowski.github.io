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

const InlineLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Bio = () => {
  return (
    <Container>
      <Paragraph>
        hi. i'm Franek.
      </Paragraph>
      <Paragraph>
        i'm 17.
      </Paragraph>
      <Paragraph>
        at 15, i joined salespatriot (yc W25), a defense startup, as one of the first engineers.
      </Paragraph>
      <Paragraph>
        i really like autonomous learning systems.
      </Paragraph>
      <Paragraph>
        dropped out of high school.
      </Paragraph>
      <Paragraph>
        now doing research eng @ ElevenLabs.
      </Paragraph>
      <Paragraph>
        find me on{' '}
        <InlineLink href="https://github.com/fmirkowski" target="_blank" rel="noopener noreferrer">
          github
        </InlineLink>
        {', '}
        <InlineLink href="https://x.com/FranekMirko" target="_blank" rel="noopener noreferrer">
          x
        </InlineLink>
        {' '}or email me at hi [at] mirkowski [dot] dev.
      </Paragraph>
    </Container>
  );
};

export default Bio;
