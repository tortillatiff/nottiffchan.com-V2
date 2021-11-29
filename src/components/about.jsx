import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
    padding: 0;
    @media (max-width: 1200px) {
        padding: 0 40px;
    }

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;
        line-height: 160%;
        align-items: center;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: 50%;
    background-color: var(--purple);
    border: 4px solid var(--purple);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      .img {
        filter: none;
        mix-blend-mode: normal;
        border-radius: 50%;
      }
    }

    .img {
      position: relative;
      border-radius: 50%;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #F8E2FA;
      mix-blend-mode: screen;
    }
  }
`;

const About = () => {
    return (
        <StyledAboutSection>
            <h2 className="purple-font">about me</h2>
            <div className="inner">
                <div>
                    <p>I’m a final year <b>Computer Science</b> student with a minor in <b>Communications</b> at the National University of Singapore (NUS).</p>
                    <p>I have working experience in, and absolutely love doing <b>full-stack development</b> and <b>user experience and interface design</b>.</p>
                    <p>My favorite projects are those that allow me to work at the crossroads of disciplines, combining my design and development skills to solve complex problems and create ✨ <b>beautiful experiences</b> ✨. I also happen to have an unhealthy obsession with typefaces...</p>
                </div>
                <StyledPic>
                    <div className="wrapper">
                        <StaticImage
                            className="img"
                            src="../assets/me.png"
                            width={500}
                            height={500}
                            quality={95}
                            formats={['AUTO', 'WEBP', 'AVIF']}
                            alt="Headshot"
                        />
                    </div>
                </StyledPic>
            </div>

        </StyledAboutSection>

    )
}

export default About
