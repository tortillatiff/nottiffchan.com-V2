import React from "react";
import styled from "styled-components";

const ProjectOverview = ({ content }) => {
  var role = content.role;
  var context = content.context;
  var tools = content.tools;

  return (
    <StyledRow>
      <div>
        <h4>My Role</h4>
        <ul>
          {role.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Project Context</h4>
        <ul>
          {context.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Tools Used</h4>
        <ul>
          {tools.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  place-items: flex-start baseline;

  h4 {
    color: var(--black);
    font-size: 24px;
    margin-bottom: 8px;
  }
  ul {
    padding-left: 20px;
  }
  li {
    font-size: 18px;
    line-height: 150%;
  }

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: baseline;
  }

  @media (min-width: 48em) {
    grid-template-columns: 3fr 2fr 1fr;
    justify-items: center;
  }
`;

export default ProjectOverview;
