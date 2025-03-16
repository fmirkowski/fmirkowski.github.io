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

const Link = styled.a`
  color: #111;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const Bio = () => {
  return (
    <Container>
      <Paragraph>
        I'm Franek Mirkowski, a builder and ML enthusiast in Poland. I'm experimenting and building with a fundamental goal of solving important problems.
      </Paragraph>
      
      <Paragraph>
        You can find me on{' '}
        <Link href="https://github.com/fmirkowski" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        {' '}or{' '}
        <Link href="mailto:mirkowskifranciszek@gmail.com">
          email me
        </Link>
        .
      </Paragraph>
    </Container>
  );
};

export default Bio;
