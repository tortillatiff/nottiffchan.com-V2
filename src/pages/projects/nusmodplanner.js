import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import React from "react";
import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectNextCase from "../../components/projects/projectNextCase";

import nmpDesignSystem from "../../images/nusmodplanner/nmpDesignSystem.png";

const links = [
  {
    link: "https://uxfol.io/p/a239d4e7/038fbf2e",
    name: "Full Case Study",
  },
  {
    link: "https://www.figma.com/proto/AjQEKpTigbvI5g73TaijsN/G2?page-id=194%3A5756&node-id=1212%3A44244&viewport=241%2C48%2C0.1&scaling=scale-down&starting-point-node-id=1212%3A44244",
    name: "Figma Prototype",
  },
];

export default function NusModPlanner() {
  return (
    <Layout title="NUSModPlanner">
      <Header
        projName="NUSModPlanner"
        projDesc="Improving the module planning process in NUS"
      />
      <StaticImage src="../../images/nusmodplanner/hero.png" alt="Hero image" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          NUS students undergo a stressful and tedious module planning process
          every semester, as the process of obtaining accurate and useful
          information to decide which modules to read is too troublesome and
          inefficient.
          <br />
          <br />
          My team’s solution was an all-in-one platform made by NUS students,
          for NUS students. Our design streamlines the module planning process
          by providing all the information that a student might need to plan
          their semesters. This project is a full UXUI case study as part of the
          module CS3240 Interactive Design, which achieved an A+ that semester.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ScreenshotContainer>
        <img src={nmpDesignSystem} alt="Design system" />
      </ScreenshotContainer>

      <ProjectTextSection>
        <p>
          Coming from a Computer Science technical background, I’d never taken a
          formal course in UX design and my only knowledge on its processes was
          piecing together bits of hundreds of Google searches, all which had
          their own opinion on what the proper UX process should be. My
          interface designs had hitherto been mostly based on intuition and
          aesthetic, rather than backed by actual user feedback and theory.
        </p>
        <p>
          This project was so fun for me since I finally could fill in the gaps
          in my knowledge and get to execute the entire process, and have an
          excuse to interview my poor friends. The coolest part for me was
          discovering useful revelations from brainstorming and user interviews,
          which I had previously assumed were redundant, and getting to use
          these ideas and see them come to life in the prototype.
        </p>
      </ProjectTextSection>

      <ProjectNextCase link="/projects/rescaleLab" transitionCol="#EBF5F0" />
    </Layout>
  );
}
