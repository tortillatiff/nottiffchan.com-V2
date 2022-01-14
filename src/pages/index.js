import React, { useState, useCallback, useEffect } from "react";
import "../styles/global.css";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import ProjectSlides from "../components/projectSlides";
import ResponsiveProjectSlides from "../components/projectSlides/responsiveProjectSlides";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";
import useWindowSize from "../hooks/useWindowSize";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CSSPlugin } from "gsap/all";

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const size = useWindowSize();

  const [timeline, setTimeline] = useState(() => gsap.timeline());
  const addAnimation = useCallback(
    (animation, index) => {
      setTimeline(timeline.add(animation, index * 0.1));
    },
    [timeline]
  );

  useEffect(() => {
    const plugins = [CSSPlugin];
    gsap.registerPlugin(plugins);
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <Layout addAnimation={addAnimation} index={2}>
      <StyledMainContainer>
        <Hero
          onCursor={onCursor}
          addAnimation={addAnimation}
          index={1}
          className="hero"
        />
        <About />

        {size.width > 1200 ? (
          <div id="projects">
            <h2
              className="purple-font"
              style={{ marginBottom: 0, margin: "auto", maxWidth: "1200px" }}
            >
              featured projects
            </h2>
            <ProjectSlides onCursor={onCursor} />
          </div>
        ) : (
          <div id="projects">
            <ResponsiveProjectSlides />
          </div>
        )}

        <div id="contact"></div>
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

export default IndexPage;
