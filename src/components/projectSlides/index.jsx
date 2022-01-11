import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import { projectSlides } from "../../data";
import ProjectSlide from "./projectSlide";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function RenderImages({ activeFeatureIndex }) {
  return projectSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})`, borderRadius: "32px" }}
      alt=""
    />
  ));
}

export default function ProjectSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const projectSliderRef = useRef();
  const projectSliderRightRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function stopTrigger() {
      if (projectSliderRef && projectSliderRightRef) {
        console.log(
          "projectSliderRef.current.offsetHeight",
          projectSliderRef.current.offsetHeight
        );
        console.log("projectSliderRef.current", projectSliderRef.current);
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
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
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
  .as-primary {
    opacity: 1;
    /* transform: scale(1.1); */
  }
`;

const SlidesContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: 7fr 4fr 1fr;
  grid-gap: 68px;
  /* grid-template-columns: 7fr 4fr;
  grid-gap: 68px;
  align-items: center;
  max-width: 1200px; */
`;
