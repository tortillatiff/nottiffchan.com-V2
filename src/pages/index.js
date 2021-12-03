import * as React from "react"
import '../styles/global.css';
import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Footer from '../components/footer.jsx';

// import { StaticImage } from 'gatsby-plugin-image';
import ScrollingColorBackground from 'react-scrolling-color-background';
import berryThumbnail from '../assets/projects/thumbnails/berryThumbnail.png'
import vibingThumbnail from '../assets/projects/thumbnails/vibingThumbnail.png';
import shillyThumbnail from '../assets/projects/thumbnails/shillyThumbnail.png';
import rescaleLabThumbnail from '../assets/projects/thumbnails/rescaleLabThumbnail.png'

const StyledMainContainer = styled.main`
  counter-reset: section;

  .section {
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .section { height: auto; }
  }
`;

const bgPink = 'rgb(252, 233, 238)';
const bgGrey = 'rgb(228, 236, 241)';
const bgGreen = 'rgb(224, 245, 236)';
const bgPurple = 'rgb(235, 222, 237)';
const bgWhite = 'rgb(253, 249, 247)';

const projects = [
  {name: "Shilly", desc: "Social platform connecting influencers and crypto coins", tags: "web, design, development", thumbnail: shillyThumbnail, bgCol: bgPink},
  {name: "vibing.", desc: "Creating personalized Spotify playlists for friends", tags: "web, design, development", thumbnail: vibingThumbnail, bgCol: bgGrey},
  {name: "Rescale Lab", desc: "SaaS platform for entrepreneurs", tags: "web, design, development", thumbnail: rescaleLabThumbnail, bgCol: bgGreen},
  {name: "berry", desc: "Tile-style shopping list mobile app", tags: "mobile, design, development", thumbnail: berryThumbnail, bgCol: bgPurple},
];


const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        />

        <div
          data-background-color={bgWhite}
          className='js-color-stop section'
        >
          <Hero />
        </div>

        <div
          data-background-color={bgWhite}
          className='js-color-stop section'
        >
          <About />
        </div>

        <Project project={projects[0]} isFirst={true}/>
        <Project project={projects[1]}/>
        <Project project={projects[2]}/>
        <Project project={projects[3]}/>

        <div
          data-background-color='rgb(61, 51, 51)'
          className='js-color-stop'
          style={{height: '100vh', position: 'relative'}}
        >
          <Footer />
        </div>

      </StyledMainContainer>
    </Layout>
  )
}

const Project = (props) => {

  return (
    <StyledProjectSection
      data-background-color={props.project.bgCol}
      className='js-color-stop section'
    >
      {props.isFirst && <h2 className="purple-font" style={{marginBottom: '100px'}}>my projects</h2>}

      <div className="inner">
        <div>
          <h3>{props.project.name}</h3>
          <h2>{props.project.desc}</h2>
          <p>{props.project.tags}</p>
        </div>

        <a href="/" className="thumbnail-wrap">
          <img src={props.project.thumbnail} alt="Project thumbnail" />
        </a>
      </div>
    </StyledProjectSection>

  );
};

const StyledProjectSection = styled.div`
padding: 48px 20px;
flex-direction: column;
max-width: 1200px;
margin: 0 auto;
position: sticky;
top: 0;

h2 { width: 80%; }

.thumbnail-wrap {
  position: sticky;
  top: 0;
}

.inner {
  display: grid;
  grid-template-columns: 7fr 4fr;
  grid-gap: 68px;
  align-items: center;
  max-width: 1200px;
}

.inner h2, h3 {
  font-weight: 500;
}

.inner p {
  color: var(--grey);
}

.inner img {
  width: 350px;
}

@media (max-width: 1080px) {
  h2 { font-size: 36px; width: 100%; }
}

@media (max-width: 768px) {
  h3 { font-size: 24px; }

  .inner { grid-gap: 40px; }
  .inner img { width: 280px; }
}

@media (max-width: 567px) {
  height: auto;

  .inner {
    display: block;
    height: auto;
  }

  .inner img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 36px;
  }
}
`;

export default IndexPage
