import React from "react";
import styled from "styled-components";
import CV from "../assets/TiffanyChan.pdf";
import useWindowSize from "../hooks/useWindowSize";

const FooterWrap = styled.section`
  width: 100%;
  /* height: calc(100vh - 200px); */
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 0 40px;
  margin: auto;

  .boldtext {
    color: var(--bg-color);
    font-size: 70px;
    font-weight: 800;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: #3d3333;
    transition: var(--transition);
    text-shadow: -1px -1px 0 var(--bg-color), 1px -1px 0 var(--bg-color),
      -1px 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color);
  }

  a:hover {
    color: var(--bg-color);
    text-shadow: none;
  }

  .smalltext {
    position: absolute;
    bottom: 0;
    color: var(--bg-color);
    font-size: var(--text-xs);
  }

  @media (max-width: 768px) {
    .boldtext {
      font-size: 60px;
    }
  }

  @media (max-width: 550px) {
    .boldtext {
      font-size: 50px;
    }
    .smalltext {
      font-size: 16px;
    }
  }
`;

const Footer = ({ onCursor }) => {
  const width = useWindowSize().width;

  return (
    <FooterWrap
      style={{
        backgroundColor: width > 1200 ? "none" : "#3d3333",
        height: width > 1200 ? "auto" : "calc(100vh - 200px)",
      }}
    >
      <StyledFooter>
        <p className="boldtext">
          check out my
          <a
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            resume
          </a>{" "}
          and{" "}
          <a
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            href="https://github.com/nottiffchan"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <br /> <br />
          say hi on{" "}
          <a
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            href="https://www.linkedin.com/in/nottiffchan/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>{" "}
          or
          <a
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            href="mailto:hi@nottiffchan.com"
          >
            {" "}
            email
          </a>
          !
        </p>
        <p className="smalltext">© Designed & coded by me!</p>
      </StyledFooter>
    </FooterWrap>
  );
};

export default Footer;
