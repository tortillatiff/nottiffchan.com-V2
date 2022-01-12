import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import cn from "classnames";
import { projectSlides } from "../../data";
import ProjectSlide from "./projectSlide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import AnimatedPicture from "../animatedPicture";
import useWindowSize from "../../hooks/useWindowSize";
import vibingThumbnail from "../../assets/projects/thumbnails/vibingThumbnail.png";
import pomopalsThumbnail from "../../assets/projects/thumbnails/pomopalsThumbnail.png";
import rescaleLabThumbnail from "../../assets/projects/thumbnails/pomopalsThumbnail.png";
import berryThumbnail from "../../assets/projects/thumbnails/berryThumbnail.png";
import { createRef } from "react";

function RenderImages({ activeFeatureIndex, onCursor }) {
  const size = useWindowSize();
  const thumbnails = [
    pomopalsThumbnail,
    vibingThumbnail,
    rescaleLabThumbnail,
    berryThumbnail,
  ];
  return projectSlides.map((project, index) => {
    const thumbnailRef = createRef(null);
    console.log(thumbnails[activeFeatureIndex]);

    return (
      <AniLink
        paintDrip
        key={projectSlides[index].link}
        className={cn({ "as-primary": activeFeatureIndex === index })}
        hex={projectSlides[activeFeatureIndex].transitionCol}
        to={projectSlides[activeFeatureIndex].link}
        onMouseEnter={() => onCursor("viewCase")}
        onMouseLeave={onCursor}
        onClick={onCursor}
      >
        {size.width < 768 && (
          <img
            style={{
              backgroundImage: `url(${project.imageUrl})`,
            }}
            alt="Project thumbnail"
          />
        )}

        {size.width >= 768 && (
          // <div
          //   className={
          //     (cn({ "as-primary": activeFeatureIndex === index }), "animPic")
          //   }
          // >
          //   <AnimatedPicture
          //     ref={thumbnailRef}
          //     height="571px"
          //     // height="770px"
          //     before={thumbnails[activeFeatureIndex]}
          //     after={thumbnails[activeFeatureIndex]}
          //     key={project.imageUrl}
          //   />
          // </div>
          <StyledThumbnail
            className={cn({ "as-primary": activeFeatureIndex === index })}
            key={project.imageUrl}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
            }}
            alt=""
          ></StyledThumbnail>
        )}
      </AniLink>
    );
  });
}

const StyledThumbnail = styled.img`
  transition: var(--transition);
  &:hover {
    transform: scale(1.3);
  }
`;

export default function ProjectSlides({ onCursor }) {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const projectSliderRef = useRef();
  const projectSliderRightRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function stopTrigger() {
      if (projectSliderRef && projectSliderRightRef) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectSliderRightRef.current,
            start: "top top",
            end: () => `+=${projectSliderRef.current.offsetHeight}`,
            scrub: true,
            pin: true,
          },
        });
        return tl;
      }
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, [projectSliderRef, projectSliderRightRef]);

  return (
    <SlidesContainer ref={projectSliderRef}>
      <div>
        {projectSlides.map((project, index) => (
          <ProjectSlide
            updateActiveImage={setFeatureIndex}
            key={project.imageUrl}
            title={project.title}
            description={project.description}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
      <StyledSlidesRight ref={projectSliderRightRef}>
        <RenderImages
          activeFeatureIndex={activeFeatureIndex}
          onCursor={onCursor}
        />
      </StyledSlidesRight>
    </SlidesContainer>
  );
}

const StyledSlidesRight = styled.div`
  /* height: 100vh; */
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  position: relative;

  img {
    width: 100%;
    height: 80vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: all 1s ease-in-out;
    /* transform: scale(1.3); */
    position: absolute;
    top: 2%;
  }
  .animPic {
    width: 100%;
    height: 80vh;
    opacity: 0;
    transition: all 1s ease-in-out;
    position: absolute;
    top: 2%;
  }
  .as-primary {
    opacity: 1;
    /* transform: scale(1.1); */
  }
`;

const SlidesContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: 14fr 8fr 1fr;
  grid-gap: 68px;
  /* grid-template-columns: 7fr 4fr;
  grid-gap: 68px;
  align-items: center;
  max-width: 1200px; */
`;
