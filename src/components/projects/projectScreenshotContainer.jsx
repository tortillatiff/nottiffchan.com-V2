import React from "react";
import styled from "styled-components";

const ProjectScreenshotContainer = (props) => {
  return <ScreenshotContainer>{props.children}</ScreenshotContainer>;
};

export default ProjectScreenshotContainer;

const ScreenshotContainer = styled.div`
  padding: 30px 15px;
  position: relative;
  display: block;
  overflow: hidden;
  /* padding-bottom: 56.25%; */
  perspective: 100px;

  @media (min-width: 768px) {
    padding: 0 60px;
  }
  @media (min-width: 1200px) {
    padding: 0 90px;
  }
  @media (min-width: 1600px) {
    padding: 0 140px;
  }

  video {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
  }

  img {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    object-fit: cover;
  }
`;
