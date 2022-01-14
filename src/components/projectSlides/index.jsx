import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import cn from "classnames";
import { projectSlides } from "../../data";
import ProjectSlide from "./projectSlide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import useWindowSize from "../../hooks/useWindowSize";
// import AnimatedPicture from "../animatedPicture";

function RenderImages({ activeFeatureIndex, onCursor }) {
  return projectSlides.map((project, index) => {
    // const thumbnailRef = createRef(null);
    return (
      <AniLink
        paintDrip
        key={projectSlides[index].link}
        hex={projectSlides[activeFeatureIndex].transitionCol}
        to={projectSlides[activeFeatureIndex].link}
        onMouseEnter={() => onCursor("viewCase")}
        onMouseLeave={onCursor}
        onClick={onCursor}
      >
        {/* <div
              className={
                (cn({ "as-primary": activeFeatureIndex === index }), "animPic")
              }
            >
              <AnimatedPicture
                ref={thumbnailRef}
                height="571px"
                // height="770px"
                before={thumbnails[activeFeatureIndex]}
                after={thumbnails[activeFeatureIndex]}
                key={project.imageUrl}
              />
            </div> */}
        <StyledThumbnail
          className={cn({ "as-primary": activeFeatureIndex === index })}
          color={project.transitionCol}
          style={{
            backgroundImage: `url(${project.imageUrl})`,
          }}
          alt=""
        ></StyledThumbnail>
      </AniLink>
    );
  });
}

export default function ProjectSlides({ onCursor }) {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const projectSliderRef = useRef();
  const projectSliderRightRef = useRef();
  const [screenWidth, setScreenWidth] = useState(useWindowSize().width);

  gsap.registerPlugin(ScrollTrigger);

  const bgColRefs = useRef([]);
  bgColRefs.current = [];

  const addToBgColRefs = (el) => {
    if (el && !bgColRefs.current.includes(el)) {
      bgColRefs.current.push(el);
    }
  };

  useEffect(() => {
    bgColRefs.current.forEach((el, index) => {
      var col = el.attributes.color.value;
      gsap.to(el, {
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: "top top",
          end: "bottom - 100vh",
          onEnter: () => gsap.to("main", { backgroundColor: col }),
          onLeave: () =>
            gsap.to("main", { backgroundColor: "var(--bg-color)" }),
          onLeaveBack: () =>
            gsap.to("main", { backgroundColor: "var(--bg-color)" }),
          onEnterBack: () => gsap.to("main", { backgroundColor: col }),
        },
      });
    });
  }, [bgColRefs]);

  // image transitons
  useEffect(() => {
    if (screenWidth > 1200) {
      function stopTrigger() {
        if (projectSliderRef.current && projectSliderRightRef) {
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
    }
  }, [projectSliderRef, projectSliderRightRef, screenWidth]);

  return (
    <>
      <StyledProjectSection>
        <SlidesContainer ref={projectSliderRef}>
          <div>
            {projectSlides.map((project, index) => (
              <div
                color={project.transitionCol}
                ref={addToBgColRefs}
                key={index}
              >
                <ProjectSlide
                  updateActiveImage={setFeatureIndex}
                  key={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  index={index}
                />
              </div>
            ))}
          </div>
          <StyledSlidesRight ref={projectSliderRightRef}>
            <RenderImages
              activeFeatureIndex={activeFeatureIndex}
              onCursor={onCursor}
            />
          </StyledSlidesRight>
        </SlidesContainer>
      </StyledProjectSection>
    </>
  );
}

const StyledProjectSection = styled.section`
  max-width: 1200px;
  padding-top: 0;
  width: 100%;
  @media (max-width: 1280px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const StyledSlidesRight = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  .as-primary {
    opacity: 1;
  }
`;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: all 1s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  outline: 1px solid ${(props) => props.color};
  outline-offset: -1px;
`;

const SlidesContainer = styled.div`
  display: grid;
  grid-template-columns: 14fr 8fr 1fr;
  grid-gap: 68px;
`;
