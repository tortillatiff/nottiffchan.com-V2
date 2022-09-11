import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import oldMe from "../assets/about/greyscaleOldMe.jpg";
import youngMe from "../assets/about/greyscaleYoungMe.jpg";
import AnimatedPicture from "./animatedPicture";
import { IconArrowUpRight } from "./icons";
import sr from "../utils/sr";
import { srConfig } from "../config";
import useWindowSize from "../hooks/useWindowSize";
import codinggif from "../assets/about/codinggif1.gif";
import bladingAbout from "../assets/about/blading.png";
import sushiAbout from "../assets/about/sushi.png";
import kopAbout from "../assets/about/kopi.png";

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
      <h2
        style={{ marginTop: "32px" }}
        className="purple-font"
        ref={revealTitle}
      >
        Hey there! I'm Tiff 👋🏻
      </h2>
      <AboutRow>
        <div className="text-col col">
          <div ref={revealPara1}>
            <h3>Designer, developer and plant mother.</h3>
            <p style={{ marginBottom: "60px" }}>
              I’m a curious soul and product designer from <b>Singapore</b> with
              a love for visual design, design systems and empowering users.
            </p>
          </div>

          <div ref={revealPara2}>
            <p style={{ marginBottom: "60px" }}>
              I’m currently a <b>Product Design Intern with Grab</b>. In the
              past 3 years, I’ve gotten the chance to do a number of
              internships, always advocating for good design at companies from
              small startups to large organisations. I’m in my final year in the{" "}
              <b>National University of Singapore</b> where I'm a Computer
              Science major.
            </p>
          </div>

          <div ref={revealPara3}>
            <p>
              My design process is inspired by my background in both engineering
              and design, I love connecting the dots between business goals,
              technical constraints and user satisfaction.
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

      <h3
        style={{
          fontWeight: "500",
          marginBottom: "20px",
          color: "var(--purple)",
        }}
      >
        When I’m not on Figma, I’m...
      </h3>
      <StyledAboutPicsRow>
        <AboutPicsElem
          imgLink={codinggif}
          caption="Turning my designs into code 👩🏻‍💻"
        ></AboutPicsElem>
        <AboutPicsElem
          imgLink={sushiAbout}
          caption="Making sushi 🍣"
        ></AboutPicsElem>
        <AboutPicsElem
          imgLink={bladingAbout}
          caption="Roller blading 🛼"
        ></AboutPicsElem>
        <AboutPicsElem
          imgLink={kopAbout}
          caption="Dressing up my dog Kopi 🐶"
        ></AboutPicsElem>
      </StyledAboutPicsRow>
    </StyledAboutSection>
  );
};

const StyledAboutSection = styled.section`
  max-width: 1200px;

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
  margin-bottom: 150px;

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
    width: 100%;
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
    .text-col p {
      width: 88%;
    }
  }

  @media (max-width: 400px) {
    .image-col {
      padding: 0;
    }
  }
`;

const StyledAboutPicsRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StyledAboutPicsElem = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;

  .caption {
    font-size: 16px;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    width: 48%;
  }
`;

const AboutPicsElem = ({ imgLink, caption }) => {
  return (
    <StyledAboutPicsElem>
      <img src={imgLink} alt={caption} />
      <p className="caption">{caption}</p>
    </StyledAboutPicsElem>
  );
};

export default About;
