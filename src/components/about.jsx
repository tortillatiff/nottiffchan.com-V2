import styled from 'styled-components';
import React, { useRef } from 'react'
import oldMe from '../assets/greyscaleOldMe2.jpg'
import youngMe from '../assets/greyscaleYoungMe.jpg'
import AnimatedPicture from './animatedPicture';
import { IconArrowUpRight } from './icons';

const StyledAboutSection = styled.section`
    max-width: 1200px;
    width: 100%;
    @media (max-width: 1280px) {
        padding-right: 40px;
        padding-left: 40px;
    }
`;

const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .text-col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding-right: 32px;
  }

  .text-col h3 {
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--purple);
  }

  .text-col p {
    line-height: 180%;
    margin-top: 0;
  }

  .image-col {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    padding-left: 24px;
  }

  & .myPic canvas::nth-child(odd) {
    opacity: 0.5;
  }

  @media (min-width: 800px) {
    .image-col { flex: 1; }
    .text-col { flex: 2; }
  }
`;

const About = () => {
  const myPhotoRef = useRef(null);

  return (
      <StyledAboutSection>
          <h2 className="purple-font">about me</h2>
          <AboutRow>
            <div className="text-col col">
              <h3>who am i?</h3>
              <p style={{marginBottom: '64px'}}>My name is <b>Tiffany Chan</b>, and I am a <b>Full Stack Developer</b> and <b>UXUI Designer</b> in Singapore. I’m a final year <b>Computer Science</b> student with minors in Communications and Interactive Media Development at the National University of Singapore (NUS).</p>

              <h3>what do i do?</h3>
              <p style={{marginBottom: '64px'}}>I combine research, user flows, wireframing, prototyping, storytelling, visual design and development to create engaging solutions in the digital medium. With my background in both design and development, I understand technical constraints and am able to design for and build around them.</p>

              <h3>what am i passionate about?</h3>
              <p>My favorite projects are those that allow me to work at the crossroads of disciplines, combining my design and development skills to solve complex problems and create ✨ <b>beautiful experiences</b> ✨. I also happen to have an unhealthy obsession with <span style={{fontFamily: 'BioRhyme Expanded'}}>typefaces</span> and my dog Kopi 🐶.</p>
            </div>

            <div className="image-col col">
              <div style={{position: 'sticky', top: '0'}}>
                <AnimatedPicture
                  height='300px'
                  ref={myPhotoRef}
                  before={oldMe}
                  after={youngMe}
                />
                <div style={{display:'flex', alignItems: 'center'}}><IconArrowUpRight />hover to time travel</div>
              </div>
            </div>
          </AboutRow>
      </StyledAboutSection>
    )
}

export default About
