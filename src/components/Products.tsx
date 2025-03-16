import styled from 'styled-components';

const Container = styled.div`
  max-width: 680px;
  margin: 100px auto 120px;
  padding: 0 24px;
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 64px;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

const ProjectSection = styled.div`
  margin-bottom: 80px;
  position: relative;
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
`;

const Strong = styled.span`
  font-weight: 500;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

const Link = styled.a`
  font-size: 18px;
  color: #000;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const BackLink = styled(Link)`
  margin-top: 60px;
  display: inline-block;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eaeaea;
  margin: 60px 0;
`;

const Products = () => {
  return (
    <Container>
      <Header>Products</Header>
      
      <ProjectSection>
        <ProjectTitle>SightVoiceApp</ProjectTitle>
        <ProjectDescription>
          A <Strong>mobile app</Strong> that makes traveling and sightseeing more accessible, engaging, and tailored to individual interests, that actually works. I presented it at one of the largest <Strong>ML conferences</Strong> in Poland - <Strong>MLinPL</Strong> for the Finals of the <Strong>ElevenLabs AI Audio Challenge</Strong>. Developed with a team of 4 friends from the Olympiad.
        </ProjectDescription>
        <LinksContainer>
          <Link href="https://sightvoiceapp.vercel.app" target="_blank" rel="noopener noreferrer">
            Try it Out
          </Link>
          <Link href="https://github.com/fimpro/ElevenLabsChallenge" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </LinksContainer>
      </ProjectSection>
      
      <Divider />
      
      <ProjectSection>
        <ProjectTitle>sciPar</ProjectTitle>
        <ProjectDescription>
          A platform to make discovering and implementing <Strong>research</Strong> more accessible for business professionals. It helps save time by enabling <Strong>natural language</Strong> expressions of their needs and problems and matching based on that also providing <Strong>non-technical summaries</Strong> adapted to query.
        </ProjectDescription>
        <LinksContainer>
          <Link href="https://scipar.vercel.app" target="_blank" rel="noopener noreferrer">
            Try it Out
          </Link>
          <Link href="https://github.com/fmirkowski/sciPar" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </LinksContainer>
      </ProjectSection>
      
      <BackLink href="/">← Back</BackLink>
    </Container>
  );
};

export default Products;
