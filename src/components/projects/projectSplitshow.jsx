import React from "react";
import styled from "styled-components";

const ProjectSplitshow = (props) => {
  const mappedLeftItems = props.leftItems.map((item, i) => (
    <StyledSplitshowItem key={i}>
      <div className="img-wrapper">
        <img src={item.imgSrc} alt="Supporting" />
      </div>
      <div className="caption">{item.caption}</div>
    </StyledSplitshowItem>
  ));

  const mappedRightItems = props.rightItems.map((item, i) => (
    <StyledSplitshowItem key={i}>
      <div className="img-wrapper">
        <img src={item.imgSrc} alt="Supporting" />
      </div>
      <div className="caption">{item.caption}</div>
    </StyledSplitshowItem>
  ));
  return (
    <SplitshowSection>
      <div className="container">
        <div className="items">
          <div className="left-col">{mappedLeftItems}</div>
          <div className="right-col">{mappedRightItems}</div>
        </div>
      </div>
    </SplitshowSection>
  );
};

export default ProjectSplitshow;

const StyledSplitshowItem = styled.div`
  display: block;
  margin: 12px -14px;

  .img-wrapper {
    padding-bottom: 100%;
    position: relative;
    display: block;
    overflow: hidden;
  }

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    vertical-align: middle;
  }

  .caption {
    display: block;
    margin: 0 auto;
    padding: 19px 0;
    max-width: 270px;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }

  @media (min-width: 360px) {
    margin: 14px -23px;

    .caption {
      padding: 23px 0 36px 0;
    }
  }

  @media (min-width: 768px) {
    margin: 14px 12px;

    .caption {
      padding: 25px 0 44px 0;
      max-width: 220px;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    margin: 34px 17px;

    .caption {
      padding: 34px 0 53px 0;
      max-width: 284px;
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    margin: 40px 20px;

    .caption {
      padding: 40px 0 60px 0;
      max-width: 318px;
      font-size: 22px;
    }
  }

  @media (min-width: 1600px) {
    margin: 32px 16px;
  }
`;

const SplitshowSection = styled.div`
  padding-bottom: 120px;

  .container {
    padding: 0 20px;
  }

  .items {
    margin: -12px -6px;
  }

  .left-col,
  .right-col {
    flex: 1;
  }

  @media (min-width: 360px) {
    .container {
      padding: 0 30px;
    }
    .items {
      margin: -14px -7px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding: 0 100px;
    }

    .items {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin: -24px -12px;
    }

    .right-col {
      margin: 122px 0 0 0;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 0 120px;
    }
    .items {
      margin: -34px -17px;
    }
    .right-col {
      margin: 170px 0 0 0;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding: 0 150px;
    }
    .items {
      margin: -40px -20px;
    }
    .right-col {
      margin: 193px 0 0 0;
    }
  }
  @media (min-width: 1350px) {
    .container {
      padding: 0 180px;
    }
  }
  @media (min-width: 1600px) {
    .container {
      padding: 0 220px;
    }
    .items {
      margin: -32px -16px;
    }
  }
  @media (min-width: 1900px) {
    .container {
      padding: 0 270px;
      width: 100%;
      max-width: 1900px;
      margin: 0 auto;
    }
    .right-col {
      margin: 250px 0 0 0;
    }
  }
`;
