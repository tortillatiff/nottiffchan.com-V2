import React from "react";
import styled from "styled-components";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProjectSplitshow = (props) => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <SplitshowSection>
      <div className="container">
        <div className="items">
          <div className="left-col">
            {props.leftItems.map((item, i) => {
              return (
                <SplitshowItem
                  key={i}
                  item={item}
                  i={i}
                  clickable={props.clickable}
                  onCursor={onCursor}
                />
              );
            })}
          </div>
          <div className="right-col">
            {props.rightItems.map((item, i) => {
              return (
                <SplitshowItem
                  key={i}
                  item={item}
                  i={i}
                  clickable={props.clickable}
                  onCursor={onCursor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SplitshowSection>
  );
};

export default ProjectSplitshow;

const SplitshowItem = ({ item, i, clickable, onCursor }) => {
  return (
    <StyledSplitshowItem key={i}>
      {clickable ? (
        <AniLink
          paintDrip
          onMouseEnter={() => onCursor("viewCase")}
          onMouseLeave={onCursor}
          onClick={onCursor}
          className="img-wrapper"
          to={item.link}
        >
          <img src={item.imgSrc} alt="Supporting" />
        </AniLink>
      ) : (
        <div className="img-wrapper">
          <img src={item.imgSrc} alt="Supporting" />
        </div>
      )}
      <div className="caption">{item.caption}</div>
      {clickable && (
        <>
          <b>{item.description}</b>
          <div
            style={{
              color: "var(--grey)",
              paddingTop: "8px",
              fontSize: "var(--text-xs)",
            }}
          >
            {item.tags}
          </div>
        </>
      )}
    </StyledSplitshowItem>
  );
};

const StyledSplitshowItem = styled.div`
  display: block;
  margin: 12px -14px;
  text-align: center;
  padding-bottom: 40px;

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
    padding-top: 40px;
    padding-bottom: 8px;
    max-width: 270px;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }

  @media (min-width: 360px) {
    margin: 14px -23px;

    /* .caption {
      padding: 23px 0 36px 0;
    } */
  }

  @media (min-width: 768px) {
    margin: 14px 12px;

    .caption {
      /* padding: 25px 0 44px 0; */
      max-width: 220px;
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    margin: 34px 17px;

    .caption {
      /* padding: 34px 0 53px 0; */
      max-width: 284px;
      font-size: 18px;
    }
  }

  @media (min-width: 1200px) {
    margin: 40px 20px;

    .caption {
      /* padding: 40px 0 60px 0; */
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
