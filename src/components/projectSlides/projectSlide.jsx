import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useOnScreen from "../../hooks/useOnScreen";

export default function ProjectSlide({
  title,
  description,
  tags,
  index,
  updateActiveImage,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <StyledProjectSlide ref={ref}>
      <h3>{title}</h3>
      <h2>{description}</h2>
      <p>{tags}</p>
    </StyledProjectSlide>
  );
}
const StyledProjectSlide = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 0 auto;

  h2 {
    font-weight: 500;
  }
  h3 {
    font-weight: 400;
    font-size: 22px;
  }
  p {
    color: var(--grey);
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
  }
`;
