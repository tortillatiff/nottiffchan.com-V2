import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <StyledHeader>
      <TopHeadContainer>
        <div className="header">
          <h1>{props.projName}</h1>
        </div>
        <h2 className="projDesc">{props.projDesc}</h2>
        {props.caption && (
          <p style={{ color: "var(--grey)", fontSize: "16px" }}>
            {props.caption}
          </p>
        )}
      </TopHeadContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  height: calc(55vh - 100px);
  min-height: 200px;
  z-index: 1;
  padding-top: 100px;

  @media (min-width: 768px) {
    min-height: 370px;
    height: calc(80vh - 100px);
  }
  @media (min-width: 360px) {
    min-height: 356px;
  }
`;

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
    width: 100%;
    font-size: 28px;
    letter-spacing: 0.03em;
    font-weight: 500;
    margin: 0 0 15px 0;
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
    .projDesc {
      width: 80%;
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
