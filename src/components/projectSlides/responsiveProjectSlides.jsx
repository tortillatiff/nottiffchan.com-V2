import React from "react";
import styled from "styled-components";
import { projectSlides } from "../../data";

export default function ResponsiveProjectSlides() {
  return (
    <FeaturedItems>
      <h2 className="purple-font">featured projects</h2>

      <div className="row">
        <div className="column">
          <FeaturedItem>
            <a href={projectSlides[0].link}>
              <img src={projectSlides[0].squareImageUrl} alt="" />
            </a>
            <div className="caption">
              <b>{projectSlides[0].title}</b>
              <p>{projectSlides[0].description}</p>
            </div>
          </FeaturedItem>
        </div>
        <div className="column">
          <FeaturedItem>
            <a href={projectSlides[1].link}>
              <img src={projectSlides[1].squareImageUrl} alt="" />
            </a>
            <div className="caption">
              <b>{projectSlides[1].title}</b>
              <p>{projectSlides[1].description}</p>
            </div>
          </FeaturedItem>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <FeaturedItem>
            <a href={projectSlides[2].link}>
              <img src={projectSlides[2].squareImageUrl} alt="" />
            </a>
            <div className="caption">
              <b>{projectSlides[2].title}</b>
              <p>{projectSlides[2].description}</p>
            </div>
          </FeaturedItem>
        </div>
        <div className="column">
          <FeaturedItem>
            <a href={projectSlides[3].link}>
              <img src={projectSlides[3].squareImageUrl} alt="" />
            </a>
            <div className="caption">
              <b>{projectSlides[3].title}</b>
              <p>{projectSlides[3].description}</p>
            </div>
          </FeaturedItem>
        </div>
      </div>
    </FeaturedItems>
  );
}

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

const FeaturedItem = styled.div`
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

  /* @media (min-width: 450px) {
    a {
      width: 450px;
      height: 450px;
      padding-bottom: 0;
    }
  } */

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
