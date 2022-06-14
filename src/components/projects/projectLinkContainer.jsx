import React from "react";
import styled from "styled-components";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../context/globalContext";

const ProjectLinkContainer = (props) => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const linkItems = props.links.map((linkObj) => (
    <StyledLink
      key={linkObj.name}
      href={linkObj.link}
      target="_blank"
      onMouseEnter={() => onCursor("pointer")}
      onMouseLeave={onCursor}
    >
      <span>{linkObj.name}</span>
    </StyledLink>
  ));
  return <StyledLinkContainer>{linkItems}</StyledLinkContainer>;
};

export default ProjectLinkContainer;

const StyledLinkContainer = styled.div`
  margin: -10px -15px;
  padding: 32px 0 0 0;

  @media (min-width: 768px) {
    margin: -10px -20px;
    padding: 40px 0 0 0;
  }
  @media (min-width: 1200px) {
    margin: -12px -32px;
  }
`;

const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  margin: 10px 15px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 500;
  vertical-align: middle;
  text-decoration: none;
  color: var(--purple);
  /* cursor: none; */

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: var(--purple);
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1),
      -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1),
      -moz-transform 1s cubic-bezier(0.19, 1, 0.22, 1),
      -o-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover:before {
    transform: scaleX(0);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -25px;
    left: -5px;
    right: -5px;
    bottom: -25px;
  }

  @media (min-width: 768px) {
    margin: 10px 20px;
    padding: 7px 0;
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    margin: 12px 32px;
  }
`;
