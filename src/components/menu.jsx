import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../assets/iconlogo.png";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  var navLinks = [
    {
      name: "about",
      url: "/#about",
    },
    {
      name: "projects",
      url: "/#jobs",
    },
    {
      name: "contact",
      url: "/#projects",
    },
  ];

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <StyledHeader>
      <a href="/">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </a>
      <StyledMenu>
        <div>
          <StyledHamburgerButton
            onClick={toggleMenu}
            menuOpen={menuOpen}
            ref={buttonRef}
            aria-label="Menu"
          >
            <div className="ham-box">
              <div className="ham-box-inner" />
            </div>
          </StyledHamburgerButton>
          <StyledSidebar
            menuOpen={menuOpen}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}
          >
            <nav ref={navRef}>
              {navLinks && (
                <ol>
                  {navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link
                        className="link"
                        to={url}
                        onClick={() => setMenuOpen(false)}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
              <button
                className="tiff-btn btn-sec"
                style={{ marginTop: "20px" }}
              >
                résumé
              </button>
            </nav>
          </StyledSidebar>
        </div>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Menu;

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
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
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: sticky;
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
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 4px;
    border-radius: 50px;
    background-color: var(--purple);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 4px;
      border-radius: 4px;
      background-color: var(--purple);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
      top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
    }
    &:after {
      width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: 100vw;
    height: 100vh;
    outline: 0;
    background-color: var(--pink-light);
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
    transition: var(--transition);
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-between;
    width: 100%;
    flex-direction: column;
    color: var(--purple);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  li {
    padding: 20px;
  }

  .link {
    text-align: center;
    padding: 0 1rem;
    text-decoration: none;
    font-weight: 500;
    color: var(--purple);
    transition: var(--transition);
    font-size: var(--text-xs);
    // cursor: none;
    padding: 20px;
    width: 100%;

    position: relative;
    margin: 0 auto 20px;
    font-size: clamp(var(--text-sm), 4vw, var(--text-lg));

    @media (max-width: 600px) {
      margin: 0 auto 10px;
    }
  }

  .link:hover {
    color: var(--pink);
  }
`;
