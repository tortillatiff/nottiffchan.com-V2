import React from 'react'
import styled from 'styled-components'
import CV from '../assets/TiffanyChan.pdf';

const StyledFooter = styled.section`
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 75%;
    height: 100%;
    padding: 0;

    .boldtext {
        color: var(--bg-color);
        font-size: 70px;
        font-weight: 800;
    }

    a {
        text-decoration: none;
        color: #3D3333;
        transition: var(--transition);
        text-shadow: -1px -1px 0 var(--bg-color), 1px -1px 0 var(--bg-color), -1px 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color);
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
        .smalltext { font-size: 16px; }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p className="boldtext">
                check out my 
                <a href={CV} target="_blank" rel="noreferrer"> resume</a> and <a href="https://github.com/nottiffchan" target="_blank" rel="noreferrer">github</a>
                <br /> <br />
                say hi on <a href="https://www.linkedin.com/in/nottiffchan/" target="_blank" rel="noreferrer">linkedin</a> or 
                <a href="mailto:hi@nottiffchan.com"> email</a>!
            </p>

            <p className="smalltext">© Designed & built by scratch by Tiffany 2021</p>
        </StyledFooter>
    )
}

export default Footer
