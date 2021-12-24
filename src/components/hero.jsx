import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import SplitText from "../utils/Split3.min.js";

import herogif from "../assets/herogif.gif";
import styled from "styled-components";
import { Icon } from "../components/icons";
import useWindowSize from "../hooks/useWindowSize";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 100px);
  width: 100%;
  max-width: 1200px;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  @media (max-width: 1600px) {
    justify-content: start;
  }

  .getintouch {
    font-weight: 500;
    color: var(--black);
    animation-delay: 0.7s !important;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 36px;
  }

  .email {
    color: var(--purple);
    text-decoration: underline;
    margin-left: 8px;
    transition: var(--transition);
  }

  .email:hover {
    color: var(--pink);
  }
`;

const HeroGif = styled.img`
  width: 432px;
  pointer-events: none;
  user-select: none;

  @media (max-width: 432px) {
    width: 100%;
    padding-top: 24px;
  }
`;

const StyledHeroText = styled.div`
  color: var(--purple);
  font-weight: 600;
  line-height: 120%;
  margin: 0;
  font-size: clamp(36px, 5.9vw, 68px);
  text-align: center;
  margin-top: 48px;

  @media (max-width: 900px) {
    width: 85%;
  }

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

  .heroTextBig {
    display: block;
  }

  .heroTextSmall {
    display: none;
  }

  @media (max-width: 400px) {
    margin-top: 20px;

    .heroTextBig {
      display: none;
    }

    .heroTextSmall {
      display: block;
    }
  }
`;

const Hero = ({ onCursor, addAnimation, index }) => {
  const size = useWindowSize();

  // let split = new SplitText(".heroTextBig", {
  //   type: "words, chars, lines",
  //   // charsClass: "character",
  // });
  // let words = split.lines;
  // console.log("WORDS", words);

  let heroRef = useRef();
  let bigHeroTextRef = useRef();
  let ctaRef = useRef();
  let girlHeadRef = useRef();

  useEffect(() => {
    const desktopAnimation = gsap
      .timeline()
      .from(girlHeadRef.current, {
        opacity: 0,
        duration: 0.3,
        y: 100,
        delay: 1.5,
        ease: "Power3.easeOut",
      })
      // .from(words, {
      //   opacity: 0,
      //   duration: 0.4,
      //   y: 50,
      //   stagger: 0.3,
      //   ease: "easeInOut",
      // })
      .from(bigHeroTextRef.current, {
        opacity: 0,
        duration: 0.3,
        y: 40,
        ease: "Power3.easeOut",
      })
      .from(ctaRef.current, {
        opacity: 0,
        duration: 0.2,
        y: 20,
        ease: "Power3.easeOut",
      });
    addAnimation(desktopAnimation, index);

    return () => desktopAnimation.progress(0).kill();
  }, [addAnimation, index]);

  return (
    <StyledHeroSection ref={heroRef}>
      <div ref={girlHeadRef}>
        <HeroGif src={herogif} alt="" />
      </div>

      {/* {size.width >= 400 && ( */}
      <StyledHeroText>
        <div className="heroTextBig" ref={bigHeroTextRef}>
          {/* hola! i’m tiff, a full stack developer & uxui designer. i create
          delightful user experiences in the digital medium. */}
          <span>h</span>
          <span>o</span>
          <span>l</span>
          <span>a</span>
          <span>! </span>
          <span>i</span>
          <span>’</span>
          <span>m </span>
          <span>t</span>
          <span>i</span>
          <span>f</span>
          <span>f</span>
          <span>, </span>
          <span>a </span>
          <span>f</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span>e</span>
          <span>n</span>
          <span>d </span>
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r </span>
          <span>a</span>
          <span>n</span>
          <span>d </span>
          <span>u</span>
          <span>x</span>
          <span>u</span>
          <span>i </span>
          <span>d</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
          <span>e</span>
          <span>r </span>
          <span>d</span>
          <span>e</span>
          <span>d</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span>d </span>
          <span>t</span>
          <span>o </span>
          <span>c</span>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
          <span>g </span>
          <span>u</span>
          <span>n</span>
          <span>i</span>
          <span>q</span>
          <span>u</span>
          <span>e </span>
          <span>u</span>
          <span>s</span>
          <span>e</span>
          <span>r </span>
          <span>e</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
          <span>.</span>
        </div>
      </StyledHeroText>
      {/* // )} */}

      <StyledHeroText>
        <div className="heroTextSmall">
          hola! i'm tiff, and i design and build unique user experiences.
        </div>
      </StyledHeroText>

      <p className="getintouch" ref={ctaRef}>
        Get in touch
        <Icon name="ArrowRight" />
        <a
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
          className="email"
          href="mailto:hi@nottiffchan.com"
        >
          hi@nottiffchan.com
        </a>
      </p>
    </StyledHeroSection>
  );
};

export default Hero;
