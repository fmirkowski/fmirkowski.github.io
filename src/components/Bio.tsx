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
        I'm Franek Mirkowski, a 16yo founder, and Deep Learning enthusiast from Poland.
      </Paragraph>
      
      <Paragraph>
        Live in the future and build what's missing. I believe that the best ideas emerge at the frontiers of fields, where deep understanding of what's possible allows important problems to be noticed.
      </Paragraph>
      
      <Paragraph>
        I was a finalist in Poland's first AI Olympiad, work on research projects like Speculative Editing, and built <Link href="#/products">products</Link> including SightVoiceApp and sciPar. Outside tech, I'm into trail running and BJJ.
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
        <Link href="https://news.ycombinator.com/user?id=fmirkowski" target="_blank" rel="noopener noreferrer">
          Hacker News
        </Link>
        {' '}or email me at{' '}
        <EmailText onClick={handleCopyEmail}>{email}</EmailText>{' '}
        <CopyButton onClick={handleCopyEmail}>{copied ? 'copied!' : 'copy'}</CopyButton>
        .
      </Paragraph>
    </Container>
  );
};

export default Bio;