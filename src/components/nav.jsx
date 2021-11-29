import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../assets/iconlogo.png';
import { keyframes } from 'styled-components';
import Menu from './menu';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 11;
    padding: 0px 20px;
    width: calc(100% - 40px);
    height: 100px;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);
    color: var(--purple);
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
        // cursor: none;
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

    a img {
        height: 64px;
    }
    
    &:hover {
        animation: ${spin} 300ms linear;
        background: var(--yellow);
    }
`;

var navLinks = [
    {
      name: 'about',
      url: '/#about',
    },
    {
      name: 'projects',
      url: '/#jobs',
    },
    {
      name: 'resume',
      url: '/#projects',
    }
];

const Nav = () => {
    return (
        <StyledHeader>
            <Logo>
                <a href="/"><img src={logo} alt="logo" /></a>
            </Logo>
            <StyledLinks>
                <ol>
                    {navLinks &&
                    navLinks.map(({ url, name }) => (
                        <Link key={name} className="link" to={url}>{name}</Link>
                    ))}
                </ol>
                <button className="contact-button tiff-btn btn-sec">get in touch</button>
            </StyledLinks>
            <Menu />
        </StyledHeader>
    )
}

export default Nav
