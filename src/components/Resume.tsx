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

const Section = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 32px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;

const Item = styled.div`
  margin-bottom: 48px;
`;

const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const ItemSubtitle = styled.div`
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
  font-weight: 400;
`;

const ItemDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  letter-spacing: -0.01em;
`;

const ContactInfo = styled.div`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 32px;
`;

const Link = styled.a`
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

const Strong = styled.span`
  font-weight: 500;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eaeaea;
  margin: 60px 0;
`;

const Resume = () => {
  return (
    <Container>
      <Header>Resume</Header>
      
      <Section>
        <ContactInfo>
          <Strong>Franek Mirkowski</Strong><br />
          16-year-old Founder & Deep Learning Enthusiast<br />
          Poland<br />
          <Link href="mailto:mirkowskifranciszek@gmail.com">mirkowskifranciszek@gmail.com</Link><br />
          <Link href="https://mirkowski.dev" target="_blank" rel="noopener noreferrer">mirkowski.dev</Link>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Current Work</SectionTitle>
        
        <Item>
          <ItemTitle>Engineer</ItemTitle>
          <ItemSubtitle>SalesPatriot · YC W25 Defense Startup</ItemSubtitle>
          <ItemDescription>
          
          </ItemDescription>
        </Item>

        <Item>
          <ItemTitle>Founder & Researcher</ItemTitle>
          <ItemSubtitle>Latent Reasoning & RLVR</ItemSubtitle>
          <ItemDescription>
            Working on the future of reasoning systems beyond language as a proxy. 
            Developing novel approaches to latent reasoning and reinforcement learning from visual representations.
          </ItemDescription>
        </Item>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Key Projects</SectionTitle>
        
        <Item>
          <ItemTitle>SightVoiceApp</ItemTitle>
          <ItemSubtitle>AI-Powered Mobile Travel Assistant</ItemSubtitle>
          <ItemDescription>
            Mobile app making travel more accessible and engaging. Presented at <Strong>MLinPL</Strong> 
            for the <Strong>ElevenLabs AI Audio Challenge Finals</Strong>. Built in 24 hours with a team of 4.
          </ItemDescription>
        </Item>

        <Item>
          <ItemTitle>sciPar</ItemTitle>
          <ItemSubtitle>Research Discovery Platform</ItemSubtitle>
          <ItemDescription>
            Platform connecting business professionals with relevant research through natural language queries. 
            Provides non-technical summaries adapted to specific business needs.
          </ItemDescription>
        </Item>

        <Item>
          <ItemTitle>ReVoice</ItemTitle>
          <ItemSubtitle>Voice Processing Tool</ItemSubtitle>
          <ItemDescription>
            AI-powered voice manipulation and processing tool. Built in 24 hours as part of rapid prototyping initiative.
          </ItemDescription>
        </Item>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Recognition</SectionTitle>
        
        <Item>
          <ItemTitle>National AI Olympiad</ItemTitle>
          <ItemSubtitle>Laureate & Finalist</ItemSubtitle>
          <ItemDescription>
            <Strong>1st National AI Olympiad:</Strong> Laureate<br />
            <Strong>2nd National AI Olympiad:</Strong> Finalist
          </ItemDescription>
        </Item>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Links</SectionTitle>
        <ContactInfo>
          <Link href="https://github.com/fmirkowski" target="_blank" rel="noopener noreferrer">GitHub</Link><br />
          <Link href="https://www.linkedin.com/in/franek-mirkowski-a0abb3330/" target="_blank" rel="noopener noreferrer">LinkedIn</Link><br />
          <Link href="https://x.com/FranekMirko" target="_blank" rel="noopener noreferrer">X</Link><br />
          <Link href="https://news.ycombinator.com/user?id=fmirkowski" target="_blank" rel="noopener noreferrer">Hacker News</Link>
        </ContactInfo>
      </Section>

      <BackLink href="/">← Back</BackLink>
    </Container>
  );
};

export default Resume; 