import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/iconlogo.png";
import styled, { keyframes, css } from "styled-components";
import CV from "../assets/TiffanyChan.pdf";
import gsap from "gsap";
import useScrollDirection from "../hooks/useScrollDirection";

const Nav = ({ onCursor, addAnimation, index }) => {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  let logoRef = useRef();
  let navLinkOne = useRef(null);
  let navLinkTwo = useRef(null);
  let navLinkThree = useRef(null);
  let navLinkFour = useRef(null);
  let navItemsRef = useRef();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (addAnimation) {
      const animation = gsap
        .timeline()
        .from(logoRef.current, {
          y: -50,
          delay: 0.3,
          duration: 0.3,
          opacity: 0,
          ease: "Power3.easeOut",
        })
        .from(navLinkOne.current, {
          y: -50,
          opacity: 0,
          duration: 0.1,
          ease: "Power3.easeOut",
        })
        .from(navLinkTwo.current, {
          y: -50,
          opacity: 0,
          duration: 0.1,
          ease: "Power3.easeOut",
        })
        .from(navLinkThree.current, {
          y: -50,
          opacity: 0,
          duration: 0.1,
          ease: "Power3.easeOut",
        })
        .from(navLinkFour.current, {
          y: -50,
          opacity: 0,
          duration: 0.1,
          ease: "Power3.easeOut",
        });
      addAnimation(animation, index);

      return () => {
        animation.progress(0).kill();
      };
    }
  }, [addAnimation, index]);

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      {/* <AniLink paintDrip hex="#5F3962" to="/"> */}
      <a href="/">
        <Logo
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          onClick={onCursor}
          ref={logoRef}
        >
          <img src={logo} alt="logo" />
        </Logo>
      </a>
      {/* </AniLink> */}
      <StyledLinks>
        <ol ref={navItemsRef}>
          <li>
            <Link
              ref={navLinkOne}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              key="home"
              className="link"
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              ref={navLinkTwo}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              key="about"
              className="link"
              to="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              ref={navLinkThree}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              key="projects"
              className="link"
              to="/projects"
            >
              projects
            </Link>
          </li>
          {/* <li>
            <Link
              ref={navLinkThree}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              key="contact"
              className="link"
              to="/#contact"
            >
              contact
            </Link>
          </li> */}
        </ol>
        <a
          ref={navLinkFour}
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          href="https://read.cv/tiffchan"
          target="_blank"
          rel="noreferrer"
          className="contact-button tiff-btn btn-sec"
        >
          résumé
        </a>
      </StyledLinks>
      {/* <Menu /> */}
    </StyledHeader>
  );
};

export default Nav;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 11;
  padding: 0px 20px;
  width: calc(100% - 40px);
  height: 100px;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(1px);
  transition: var(--transition);
  color: var(--purple);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(0px);
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(-70px);
    `};
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    .link {
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-decoration: none;

      font-weight: 500;
      margin-right: 11px;
      color: var(--purple);
      transition: var(--transition);
      font-size: var(--text-xs);
      cursor: none;
    }

    .link:hover {
      color: var(--pink);
    }
  }

  .contact-button {
    margin-left: 15px;
  }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 64px;
  margin-left: 8px;

  img {
    height: 64px;
  }

  &:hover {
    animation: ${spin} 300ms linear;
    background: var(--yellow);
  }
`;
