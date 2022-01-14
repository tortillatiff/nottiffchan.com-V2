import React from "react";
import styled from "styled-components";
import { projectSlides } from "../../data";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function ResponsiveProjectSlides() {
  return (
    <FeaturedItems>
      <h2 className="purple-font">featured projects</h2>
      <div className="row">
        <FeaturedItem index={0} />
        <FeaturedItem index={1} />
      </div>
      <div className="row">
        <FeaturedItem index={2} />
        <FeaturedItem index={3} />
      </div>
    </FeaturedItems>
  );
}

const FeaturedItem = ({ index }) => {
  const proj = projectSlides[index];
  return (
    <div className="column">
      <StyledFeaturedItem>
        <AniLink paintDrip hex={proj.transitionCol} to={proj.link}>
          <img src={proj.squareImageUrl} alt="" />
        </AniLink>
        <div className="caption">
          <b>{proj.title}</b>
          <p>{proj.description}</p>
        </div>
      </StyledFeaturedItem>
    </div>
  );
};

const FeaturedItems = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }

  @media (min-width: 600px) {
    .column {
      flex: 1;
    }
  }
`;

const StyledFeaturedItem = styled.div`
  padding: 40px 0;
  cursor: pointer;

  a {
    position: relative;
    display: block;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
  }

  .caption {
    margin: 32px auto 0 auto;
    max-width: 320px;
    text-align: center;
  }

  img {
    max-width: 100%;
    border-radius: 40px;
  }

  @media (min-width: 480px) {
    display: inline-block;
    vertical-align: top;
    padding: 40px 20px;

    a {
      width: auto;
      height: auto;
    }
  }

  @media (min-width: 1050px) {
    a {
      width: 450px;
      height: 450px;
      padding-bottom: 0;
    }
  }
`;
