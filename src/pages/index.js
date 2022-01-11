import React, { useRef, useState, useCallback, useEffect } from "react";
import "../styles/global.css";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer.jsx";
import ProjectSlides from "../components/projectSlides";

// import ScrollingColorBackground from "react-scrolling-color-background";
// import berryThumbnail from "../assets/projects/thumbnails/berryThumbnailSquare.png";
// import vibingThumbnail from "../assets/projects/thumbnails/vibingThumbnailSquare.png";
// import rescaleLabThumbnail from "../assets/projects/thumbnails/rescaleLabThumbnailSquare.png";
// import shillyThumbnail from "../assets/projects/thumbnails/shillyThumbnailSquare.png";
import AnimatedPicture from "../components/animatedPicture";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import useWindowSize from "../hooks/useWindowSize";
import { gsap } from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ScrollTrigger, snap } from "gsap/all";
import { CSSPlugin } from "gsap/all";

// const bgPink = "rgb(252, 233, 238)";
// const bgGrey = "rgb(228, 236, 241)";
// const bgGreen = "rgb(224, 245, 236)";
// const bgPurple = "rgb(235, 222, 237)";
// const bgWhite = "rgb(253, 249, 247)";

// const projects = [
//   {
//     name: "Shilly",
//     desc: "Social platform connecting influencers and crypto coins",
//     tags: "web, design, development",
//     thumbnail: shillyThumbnail,
//     bgCol: bgPink,
//     link: "/",
//   },
//   {
//     name: "vibing.",
//     desc: "Creating personalized Spotify playlists for friends",
//     tags: "web, design, development",
//     thumbnail: vibingThumbnail,
//     bgCol: bgGrey,
//     link: "/projects/vibing/",
//     transitionCol: "#F5F5F5",
//   },
//   {
//     name: "Rescale Lab",
//     desc: "SaaS platform for entrepreneurs",
//     tags: "web, design, development",
//     thumbnail: rescaleLabThumbnail,
//     bgCol: bgGreen,
//     link: "/projects/rescaleLab/",
//     transitionCol: "#E3F1E8",
//   },
//   {
//     name: "berry",
//     desc: "Tile-style shopping list mobile app",
//     tags: "mobile, design, development",
//     thumbnail: berryThumbnail,
//     bgCol: bgPurple,
//     link: "/projects/berry/",
//     transitionCol: "#F0E7FE",
//   },
// ];

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const [timeline, setTimeline] = useState(() => gsap.timeline());
  const addAnimation = useCallback(
    (animation, index) => {
      timeline.add(animation, index * 0.1);
    },
    [timeline]
  );

  useEffect(() => {
    const plugins = [CSSPlugin];
    gsap.registerPlugin(plugins);
    gsap.registerPlugin(ScrollTrigger);

    function trigger() {
      const tl = gsap.timeline();
      tl.to(
        ".hero",
        {
          backgroundColor: "black",
          duration: 0.25,
        },
        "-=0.5"
      );

      return tl;
    }

    gsap.timeline().add(trigger());
  }, []);

  return (
    <Layout addAnimation={addAnimation} index={2}>
      <StyledMainContainer>
        {/* <ScrollingColorBackground
          selector=".js-color-stop[data-background-color]"
          colorDataAttribute="data-background-color"
          initialRgb="rgb(0, 0, 0)"
        /> */}

        {/* <div
          data-background-color={bgWhite}
          className="js-color-stop section"
          style={{ minHeight: "calc(100vh - 100px)" }}
        > */}
        <Hero
          onCursor={onCursor}
          addAnimation={addAnimation}
          index={1}
          className="hero"
        />
        {/* </div>

        <div
          id="about"
          data-background-color={bgWhite}
          className="js-color-stop section"
        > */}
        <About />
        <ProjectSlides />
        {/* </div>

        <div id="projects"></div>
        <Project onCursor={onCursor} project={projects[0]} isFirst={true} />
        <Project onCursor={onCursor} project={projects[1]} />
        <Project onCursor={onCursor} project={projects[2]} />
        <Project onCursor={onCursor} project={projects[3]} />

        <div
          data-background-color={bgPurple}
          className="js-color-stop"
          style={{ height: "4vh", position: "relative" }}
        ></div>
        <div
          data-background-color="rgb(61, 51, 51)"
          className="js-color-stop"
          style={{ height: "10vh", position: "relative" }}
        ></div>

        <div
          id="contact"
          data-background-color="rgb(61, 51, 51)"
          className="js-color-stop"
          style={{ height: "100vh", position: "relative" }}
        > */}
        <Footer onCursor={onCursor} />
        {/* </div> */}
      </StyledMainContainer>
    </Layout>
  );
};

const StyledMainContainer = styled.main`
  counter-reset: section;

  .section {
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .section {
      height: auto;
    }
  }
`;

const Project = (props) => {
  const thumbnailRef = useRef(null);
  const size = useWindowSize();

  return (
    <StyledProjectSection
      data-background-color={props.project.bgCol}
      className="js-color-stop section"
    >
      {props.isFirst && (
        <h2 className="purple-font" style={{ marginBottom: "100px" }}>
          my projects
        </h2>
      )}

      <div className="inner">
        <div>
          <h3>{props.project.name}</h3>
          <h2>{props.project.desc}</h2>
          <p>{props.project.tags}</p>
        </div>

        <AniLink
          paintDrip
          hex={props.project.transitionCol}
          to={props.project.link}
          onMouseEnter={() => props.onCursor("viewCase")}
          onMouseLeave={props.onCursor}
          onClick={props.onCursor}
        >
          {size.width < 768 && (
            <img src={props.project.thumbnail} alt="Project thumbnail" />
          )}

          {size.width >= 768 && (
            <AnimatedPicture
              ref={thumbnailRef}
              // height="571px"
              height="770px"
              before={props.project.thumbnail}
              after={props.project.thumbnail}
            />
          )}
        </AniLink>
      </div>
    </StyledProjectSection>
  );
};

const StyledProjectSection = styled.div`
  padding: 48px 20px;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    width: 80%;
  }

  img {
    transition: var(--transition);
  }

  .inner {
    display: grid;
    /* grid-template-columns: 7fr 3fr; */
    grid-template-columns: 7fr 4fr;
    grid-gap: 68px;
    align-items: center;
    max-width: 1200px;
  }

  .inner h2,
  h3 {
    font-weight: 500;
  }

  .inner p {
    color: var(--grey);
  }

  .inner img {
    width: 350px;
  }

  @media (max-width: 1080px) {
    h2 {
      font-size: 36px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }

    .inner {
      grid-gap: 40px;
    }
    .inner img {
      width: 280px;
    }
  }

  @media (max-width: 567px) {
    height: auto;

    .inner {
      display: block;
      height: auto;
    }

    .inner img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 36px;
    }
  }
`;

export default IndexPage;
