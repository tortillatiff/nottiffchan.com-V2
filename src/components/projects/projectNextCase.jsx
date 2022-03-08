import React from "react";
import styled from "styled-components";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { allProjects } from "../../data";

export default function ProjectNextCase() {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <NextCaseWrap>
      <AniLink
        paintDrip
        onMouseEnter={() => onCursor("pointer")}
        onMouseLeave={onCursor}
        onClick={onCursor}
        to="/projects"
        hex="#5f3962"
      >
        <h3>All</h3>
      </AniLink>
      {allProjects.map((proj) => {
        return (
          <AniLink
            paintDrip
            hex={proj.transitionCol}
            to={proj.link}
            style={{ paddingLeft: "20px" }}
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            onClick={onCursor}
          >
            <h3 class={url.includes(proj.link) ? "active" : ""}>
              {proj.title}
            </h3>
          </AniLink>
        );
      })}
    </NextCaseWrap>
  );
}

const NextCaseWrap = styled.div`
  width: 100%;
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h1 {
    font-size: 54px;
    color: var(--black);
    text-decoration: underline;
  }

  h3 {
    color: var(--grey);
    opacity: 0.4;
    margin: 12px 0;
  }

  .active {
    color: var(--purple);
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;
