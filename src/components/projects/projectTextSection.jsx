import React from "react";
import styled from "styled-components";

const ProjectTextSection = (props) => {
  return (
    <TopHeadContainer>
      <Container>{props.children}</Container>
    </TopHeadContainer>
  );
};

export default ProjectTextSection;

const TopHeadContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  p {
    line-height: 1.6;
    width: 100%;
  }

  .header {
    margin: 0 0 15px 0;
    perspective: 600px;
  }

  .header h1 {
    font-weight: 500;
    font-size: 17px;
    margin: 0;
  }

  .projDesc {
    font-size: 28px;
    letter-spacing: 0.03em;
    font-weight: 500;
    margin: 0;
    color: var(--purple);
  }

  @media (min-width: 360px) {
    padding: 0 30px;

    .projDesc {
      font-size: 34px;
    }
  }
  @media (min-width: 768px) {
    padding: 0 100px;

    p {
      width: 80%;
    }
    .header {
      margin: 0 0 18px 0;
    }
    .header h1 {
      font-size: 20px;
      line-height: 250%;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 120px;
  }
  @media (min-width: 1200px) {
    padding: 0 150px;

    .projDesc {
      font-size: 5vw;
    }
  }
  @media (min-width: 1350px) {
    padding: 0 180px;
  }
  @media (min-width: 1900px) {
    .projDesc {
      font-size: 100px;
    }
  }
`;

const Container = styled.section`
  padding: 120px 0;
  padding-bottom: 60px;

  h3 {
    margin: 0;
    margin-bottom: 30px;
    color: var(--purple);
    font-size: 38px;
    font-weight: 500;
  }

  @media (min-width: 360px) {
    padding: 170px 0;
    padding-bottom: 85px;

    h3 {
      font-size: 42px;
    }
  }
  @media (min-width: 768px) {
    padding: 240px 0;
    padding-bottom: 150px;

    h3 {
      font-size: 60px;
    }
  }
  @media (min-width: 1350px) {
    h3 {
      font-size: 70px;
    }
  }
`;
