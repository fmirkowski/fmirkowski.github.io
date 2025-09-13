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

// const Navigation = styled.div`
//   margin-top: 60px;
//   padding-top: 40px;
//   border-top: 1px solid #eaeaea;
// `;

// const NavLink = styled(Link)`
//   font-size: 18px;
//   display: inline-block;
//   margin-right: 32px;
// `;

const Bio = () => {
  const [copied, setCopied] = useState(false);
  const email = "mirkowskifranciszek@gmail.com";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  rconst Bio = () => {
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
        spent a month in SF exploring the edge of research.
      </Paragraph>

      <Paragraph>
        dropped out of high school.
      </Paragraph>

      <Paragraph>
        now research eng @ ElevenLabs.
      </Paragraph>

      {/* Footer separated with extra margin-top */}
      <Paragraph className="mt-10">
        Find me on{' '}
        <Link
          href="https://github.com/fmirkowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        {', '}
        <Link
          href="https://www.linkedin.com/in/franek-mirkowski-a0abb3330/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        {', '}
        <Link
          href="https://x.com/FranekMirko"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </Link>
        {' '}or email me at{' '}
        <EmailText onClick={handleCopyEmail}>{email}</EmailText>{' '}
        <CopyButton onClick={handleCopyEmail}>
          {copied ? 'copied!' : 'copy'}
        </CopyButton>
        .
      </Paragraph>

      {/* 
      <Navigation>
        <NavLink href="#/resume">Resume</NavLink>
        <NavLink href="#/products">Products</NavLink>
      </Navigation> 
      */}
    </Container>
  );
};

export default Bio;

     
