import React, { useState, useCallback, useEffect } from "react";
import "../styles/global.css";
import styled from "styled-components";
import Layout from "../components/layout";
import Hero from "../components/hero";
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
import { IconArrowRight } from "../components/icons";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
  }, []);

  return (
    <Layout addAnimation={addAnimation} index={2}>
      {size.width && (
        <StyledMainContainer>
          <Hero
            onCursor={onCursor}
            addAnimation={addAnimation}
            index={1}
            className="hero"
            isMobile={size.width <= 400}
          />

          {size.width > 1200 ? (
            <div id="projects">
              <h2
                className="purple-font"
                style={{
                  marginBottom: 0,
                  margin: "auto",
                  maxWidth: "1200px",
                  marginTop: "200px",
                }}
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
          <div style={{ width: "100%", paddingBottom: "100px" }}>
            <AniLink paintDrip hex="#5f3962" to="/projects">
              <button
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                onClick={onCursor}
                target="_blank"
                rel="noreferrer"
                className="tiff-btn btn-sec"
              >
                View all projects
                <IconArrowRight />
              </button>
            </AniLink>
          </div>
        </StyledMainContainer>
      )}
    </Layout>
  );
};

const StyledMainContainer = styled.main`
  counter-reset: section;

  .tiff-btn {
    display: flex;
    margin: auto;
  }

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
