import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import oldMe from "../assets/greyscaleOldMe.jpg";
import youngMe from "../assets/greyscaleYoungMe.jpg";
import AnimatedPicture from "./animatedPicture";
import { IconArrowUpRight } from "./icons";
import sr from "../utils/sr";
import { srConfig } from "../config";
import useWindowSize from "../hooks/useWindowSize";

const About = () => {
  const width = useWindowSize().width;
  const revealTitle = useRef(null);
  const revealPhoto = useRef(null);
  const revealPara1 = useRef(null);
  const revealPara2 = useRef(null);
  const revealPara3 = useRef(null);

  const myPhotoRef = useRef(null);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealPhoto.current, srConfig());
    sr.reveal(revealPara1.current, srConfig());
    sr.reveal(revealPara2.current, srConfig());
    sr.reveal(revealPara3.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about">
      <h2 className="purple-font" ref={revealTitle}>
        about me
      </h2>
      <AboutRow>
        <div className="text-col col">
          <div ref={revealPara1}>
            <h3>who am i?</h3>
            <p style={{ marginBottom: "60px" }}>
              My name is <b>Tiffany Chan</b>, and I am a designer that codes.
              <br />
              <br />
              I’m a final year Computer Science student at the National
              University of Singapore (NUS), but along the way, through side
              projects and internships, I found that I was fascinated by the
              more human side behind the code I was writing and fell in love
              with the art of problem solving. This lead me to my minor in
              Interactive Media Development.
            </p>
          </div>

          <div ref={revealPara2}>
            <h3>what do i do?</h3>
            <p style={{ marginBottom: "60px" }}>
              I combine research, user flows, wireframing, prototyping,
              storytelling, visual design and development to create engaging
              solutions in the digital medium. With my background in both design
              and development, I understand both technical and design
              constraints and am able to design for and build around them.
            </p>
          </div>

          <div ref={revealPara3}>
            <h3>what am i passionate about?</h3>
            <p>
              My favorite projects are those that allow me to work at the
              crossroads of disciplines, combining my design and development
              skills to solve complex problems and create ✨{" "}
              <b>beautiful experiences</b> ✨. I also happen to have an
              unhealthy obsession with{" "}
              <span style={{ fontFamily: "BioRhyme Expanded" }}>typefaces</span>{" "}
              and my family dog Kopi 🐶.
            </p>
          </div>
        </div>

        <div className="image-col col" ref={revealPhoto}>
          {width > 768 ? (
            <div>
              <AnimatedPicture
                height="380px"
                ref={myPhotoRef}
                before={oldMe}
                after={youngMe}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconArrowUpRight />
                hover to time travel
              </div>
            </div>
          ) : (
            <img className="mobileImgMe" src={oldMe} alt="" />
          )}
        </div>
      </AboutRow>
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled.section`
  max-width: 1200px;
  /* width: 100%; */

  .mobileImgMe {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 40px auto;
  }

  @media (max-width: 1280px) {
    padding-right: 40px;
    padding-left: 40px;
  }

  @media (max-width: 400px) {
    .mobileImgMe {
      margin: 0;
      width: 100%;
    }
  }
`;

const AboutRow = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  width: 100%;

  .text-col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding-right: 32px;
  }

  .text-col h3 {
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--purple);
  }

  .text-col p {
    line-height: 180%;
    margin-top: 0;
  }

  .image-col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding-left: 24px;
  }

  & .myPic canvas::nth-child(odd) {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .image-col {
      flex: 1;
    }
    .text-col {
      flex: 2;
    }
  }

  @media (max-width: 400px) {
    .image-col {
      padding: 0;
    }
  }
`;

export default About;
