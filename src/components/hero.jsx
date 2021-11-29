import React from 'react'
import herogif from '../assets/herogif.gif'
import styled from 'styled-components';
import { Icon } from '../components/icons';

const StyledHeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }

    .getintouch {
        font-weight: 500;
        color: var(--black);
        // cursor: none;
        animation-delay: 0.7s!important;
        display: flex;
        align-items: center;
        text-align: center;
        margin-top: 36px;
    }

    .email {
        color: var(--purple);
        text-decoration: underline;
        margin-left: 8px;
    } 
      
    .email:hover {
        color: var(--pink);
    }
`;

const HeroGif = styled.img`
    width: 432px;

    @media (max-width: 432px) {
        width: 100%;
    }
`;

const StyledHeroText = styled.h1`
    color: var(--purple);
    line-height: 120%;
    margin: 0;
    font-size: clamp(36px, 4.3vw, 70px);
    text-align: center;
    margin-top: 48px;
    width: 85%;

    @media (max-width: 600px) {
        width: 95%;
    }

    span {
        transition: color 2s;
        transition-delay: 1.5s;
    }

    span:nth-child(1n):hover {
        color: var(--pink);
    }
    
    span:nth-child(2n):hover {
        color: var(--gold);
    }
    
    span:nth-child(3n):hover {
        color: var(--pink-dark);
    }
    
    span:hover {
        transition: color 0s;
    }
`;

const Hero = () => {
    return (
        <StyledHeroSection>
            <HeroGif src={herogif} alt="" />
            <StyledHeroText>
                <span>h</span><span>o</span><span>l</span><span>a</span><span>! </span>
                <span>i</span><span>’</span><span>m </span><span>t</span><span>i</span><span>f</span><span>f</span><span>, </span><span>a </span><span>f</span><span>r</span><span>o</span><span>n</span><span>t</span><span>-</span><span>e</span><span>n</span><span>d </span><span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r </span><span>a</span><span>n</span><span>d </span><span>u</span><span>x</span><span>u</span><span>i </span><span>d</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span><span>e</span><span>r </span><span>d</span><span>e</span><span>d</span><span>i</span><span>c</span><span>a</span><span>t</span><span>e</span><span>d </span><span>t</span><span>o </span><span>c</span><span>r</span><span>e</span><span>a</span><span>t</span><span>i</span><span>n</span><span>g </span><span>u</span><span>n</span><span>i</span><span>q</span><span>u</span><span>e </span><span>u</span><span>s</span><span>e</span><span>r </span><span>e</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span><span>s</span><span>.</span>
            </StyledHeroText>

            <p class="getintouch">Get in touch
                <Icon name="ArrowRight" />
                <a class="email" href="mailto:hi@nottiffchan.com">hi@nottiffchan.com</a>
            </p>
        </StyledHeroSection> 
    )
}

export default Hero
