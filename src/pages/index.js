import * as React from "react"
import '../styles/global.css';
import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Resume from '../components/resume';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
        {/* <Projects /> */}
        {/* <Resume /> */}
      </StyledMainContainer>
    </Layout>
  )
}

export default IndexPage
