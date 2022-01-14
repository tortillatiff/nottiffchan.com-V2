import React from "react";
import styled from "styled-components";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function ProjectNextCase({
  link,
  text = "Next case",
  transitionCol,
}) {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <NextCaseWrap>
      <AniLink
        paintDrip
        hex={transitionCol}
        to={link}
        onMouseEnter={() => onCursor("viewCase")}
        onMouseLeave={onCursor}
        onClick={onCursor}
      >
        <h1>{text}</h1>
      </AniLink>
    </NextCaseWrap>
  );
}

const NextCaseWrap = styled.div`
  width: 100%;
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: var(--black);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;
