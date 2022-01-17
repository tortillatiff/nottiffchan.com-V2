import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { projectSlides } from "../../data";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import sr from "../../utils/sr";
import { srConfig } from "../../config";

export default function ResponsiveProjectSlides() {
  const revealTitle = useRef(null);
  const proj0 = useRef(null);
  const proj1 = useRef(null);
  const proj2 = useRef(null);
  const proj3 = useRef(null);
  const proj4 = useRef(null);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(proj0.current, srConfig(100));
    sr.reveal(proj1.current, srConfig(200));
    sr.reveal(proj2.current, srConfig(300));
    sr.reveal(proj3.current, srConfig(400));
    sr.reveal(proj4.current, srConfig(500));
  }, []);

  return (
    <FeaturedItems>
      <h2 className="purple-font" ref={revealTitle}>
        featured projects
      </h2>
      <div className="row">
        <div ref={proj0}>
          <FeaturedItem index={0} />
        </div>
        <div ref={proj1}>
          <FeaturedItem index={1} />
        </div>
      </div>
      <div className="row">
        <div ref={proj2}>
          <FeaturedItem index={2} />
        </div>
        <div ref={proj3}>
          <FeaturedItem index={3} />
        </div>
      </div>
      <div className="row">
        <div ref={proj4}>
          <FeaturedItem index={4} />
        </div>
        <div></div>
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
