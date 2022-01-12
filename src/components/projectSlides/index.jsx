import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import cn from "classnames";
import { projectSlides } from "../../data";
import ProjectSlide from "./projectSlide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import AnimatedPicture from "../animatedPicture";
import useWindowSize from "../../hooks/useWindowSize";
import Footer from "../footer";

// projectSlides.push({
//   isFooter: true,
//   transitionCol: "#3d3333",
//   imageUrl: "./greyscaleYoungMe.jpg",
// });

function RenderImages({ activeFeatureIndex, onCursor }) {
  const size = useWindowSize();

  return projectSlides.map((project, index) => {
    // const thumbnailRef = createRef(null);
    console.log(project);

    return (
      <>
        {index < 4 && (
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
              // key={project.imageUrl}
              color={project.transitionCol}
              style={{
                backgroundImage: `url(${project.imageUrl})`,
              }}
              alt=""
            ></StyledThumbnail>
          </AniLink>
        )}
        {index === 4 && (
          <StyledThumbnail
            className={cn({ "as-primary": activeFeatureIndex === index })}
            // key={project.imageUrl}
            color={project.transitionCol}
            style={{
              backgroundImage: `url(${project.imageUrl})`,
            }}
            alt=""
          ></StyledThumbnail>
        )}
      </>
    );
  });
}

export default function ProjectSlides({ onCursor }) {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const projectSliderRef = useRef();
  const projectSliderRightRef = useRef();
  const size = useWindowSize();

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

  console.log("projectSlides: ", projectSlides);

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
                {/* {project.isFooter && index > 4 && null}
                {project.isFooter && size.width > 1200 && index === 4 ? (
                  <Footer onCursor={onCursor} />
                ) : ( */}
                <ProjectSlide
                  updateActiveImage={setFeatureIndex}
                  key={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  index={index}
                />
                {/* )} */}
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
      {/* <div ref={footerRef}>
        <Footer onCursor={onCursor} />
      </div> */}
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
  /* height: 100%; */
  width: 100%;
  overflow: hidden;
  position: relative;

  .as-primary {
    opacity: 1;
    /* transform: scale(1.1); */
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
