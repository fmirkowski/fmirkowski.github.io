import styled from 'styled-components';
import { useState } from 'react';

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

const EmailText = styled.span`
  color: #111;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
  cursor: pointer;
`;

const CopyButton = styled.span`
  font-size: 16px;
  margin-left: 6px;
  cursor: pointer;
  font-weight: 400;
  color: #555;
`;

const Navigation = styled.div`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #eaeaea;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  display: inline-block;
  margin-right: 32px;
`;

const Bio = () => {
  const [copied, setCopied] = useState(false);
  const email = "mirkowskifranciszek@gmail.com";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container>
      <Paragraph>
        I'm Franek Mirkowski, a <strong>16yo</strong> founder, and Deep Learning enthusiast from Poland.
      </Paragraph>
      
      <Paragraph>
        Live in the future and build what's missing. I believe that the best ideas emerge at the frontiers of fields, where truly deep understanding of what's possible allows important problems to be noticed.
      </Paragraph>
      
      <Paragraph>
        Currently working on <strong>Latent Reasoning</strong> and <strong>RLVR</strong>, because I don't believe language is the right proxy for reasoning.
      </Paragraph>

      <Paragraph>
        I was also an <strong>engineer at SalesPatriot</strong> - a YC W25, defense startup and - <strong>visited SF for a month during school to explore the edge of research.</strong> I'm a laureate & finalist in 1st and 2nd National AI Olympiad and built products (in 24h) including <Link href="https://sightvoiceapp.vercel.app" target="_blank" rel="noopener noreferrer">SightVoiceApp</Link>, <Link href="https://scipar.vercel.app" target="_blank" rel="noopener noreferrer">sciPar</Link> and <Link href="https://revoice-wwh.vercel.app" target="_blank" rel="noopener noreferrer">ReVoice</Link>.
      </Paragraph>
      <Paragraph>
        Find me on{' '}
        <Link href="https://github.com/fmirkowski" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        {', '}
        <Link href="https://www.linkedin.com/in/franek-mirkowski-a0abb3330/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
        {', '}
        <Link href="https://x.com/FranekMirko" target="_blank" rel="noopener noreferrer">
          X
        </Link>
        {', '}
        <Link href="https://news.ycombinator.com/user?id=fmirkowski" target="_blank" rel="noopener noreferrer">
          Hacker News
        </Link>
        {' '}or email me at{' '}
        <EmailText onClick={handleCopyEmail}>{email}</EmailText>{' '}
        <CopyButton onClick={handleCopyEmail}>{copied ? 'copied!' : 'copy'}</CopyButton>
        .
      </Paragraph>
{/* 
      <Navigation>
        <NavLink href="#/resume">Resume</NavLink>
        <NavLink href="#/products">Products</NavLink>
      </Navigation> */}
    </Container>
  );
};

export default Bio;