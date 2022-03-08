import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import pdfCaseStudy from "../../assets/RescaleLabCaseStudy.pdf";

import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";
import ProjectNextCase from "../../components/projects/projectNextCase";

import rDemo from "../../images/RescaleLab/rDemo.mp4";
// import rDesignSystem from "../../images/RescaleLab/rDesignSystem.png";
import rEnd from "../../images/RescaleLab/rEnd.png";
import rLeftOne from "../../images/RescaleLab/rLeftOne.png";
import rLeftTwo from "../../images/RescaleLab/rLeftTwo.png";
import rLeftThree from "../../images/RescaleLab/rLeftThree.png";
import rRightOne from "../../images/RescaleLab/rRightOne.png";
import rRightTwo from "../../images/RescaleLab/rRightTwo.png";
import rRightThree from "../../images/RescaleLab/rRightThree.png";
import testinginsights from "../../images/RescaleLab/testinginsights.png";
import designSystemObjectives from "../../images/RescaleLab/designSystemObjectives.png";
import designSystemPages from "../../images/RescaleLab/designSystemPages.png";
import redesignedHomePage from "../../images/RescaleLab/redesignedHomePage.png";
import redesignedOrgTools from "../../images/RescaleLab/redesignedOrgTools.png";
import signUpFlowVid from "../../images/RescaleLab/signUpFlow.mp4";

const links = [
  { link: "https://www.rescalelab.com/", name: "Live Site" },
  { link: pdfCaseStudy, name: "Full Case Study" },
];

const styleguideLink = [
  {
    link: "https://zeroheight.com/596dd3e26/p/30e71b-rescale-lab",
    name: "Design System on Zeroheight",
  },
];

const leftItems = [
  {
    imgSrc: rLeftOne,
    caption: "Refreshed landing page for improved visual branding",
  },
  {
    imgSrc: rLeftTwo,
    caption: "Main functions are all accessible from the home page.",
  },
  { imgSrc: rLeftThree, caption: "General redesign of components" },
];

const rightItems = [
  {
    imgSrc: rRightOne,
    caption: "Improved and redesigned sign up and log in flow",
  },
  {
    imgSrc: rRightTwo,
    caption:
      "Program managers are easily able to keep track of their incubator program.",
  },
  {
    imgSrc: rRightThree,
    caption: "Built company’s first design system",
  },
];

const RescaleLab = () => {
  return (
    <Layout title="Rescale Lab – Tiffany Chan">
      <Header
        projName="Rescale Lab"
        projDesc="SaaS platform for entrepreneurs"
        caption="INTERNSHIP • UX DESIGN • PROTOTYPING"
      />
      <StaticImage src="../../images/RescaleLab/hero.png" alt="Hero" />

      <ProjectTextSection>
        <small>Background</small>
        <h3>Redesigning the Rescale Lab experience for hundreds of users</h3>
        <p>
          Rescale Lab is a tech startup in Singapore that aims to provide
          aspiring entrepreneurs with the connectivity and guidance to build a
          successful startup using their online SaaS platform. Hundreds of users
          visit the platform periodically as part of startup incubation
          programs.
        </p>

        {/* <ProjectLinkContainer links={links}></ProjectLinkContainer> */}
      </ProjectTextSection>

      <ProjectTextSection>
        <small>The challenge</small>
        <h3>Shaking things up</h3>
        <p>
          As the platform and team grew the platform struggled to scale.
          Fundamental usability was challenged. User retention was poor. The
          site looked and felt <b>outdated</b>, and looked visually{" "}
          <b>inconsistent</b> across all features. It was clear a more extensive
          change was necessary.
          <br />
          <br />
          Our high level goals were to:
          <br />
        </p>
        <ol style={{ lineHeight: "170%" }}>
          <li>
            Improve user <b>conversion</b>
          </li>
          <li>
            Iron out <b>visual inconsistencies</b> and develop a{" "}
            <b>brand personality </b>
            across the platform
          </li>
          <li>
            Make it <b>easy</b> to use for entrepreneurs everywhere
          </li>
        </ol>
      </ProjectTextSection>

      <ProjectTextSection>
        <small>The solution</small>
        <h3>Visual refresh and information restructure</h3>
      </ProjectTextSection>
      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <ProjectTextSection>
        <small>Research & improvement Takeaways</small>
        <h3>Usability testing to uncover issues</h3>
        <p>
          Using the existing Rescale Lab site, I conducted usability tests and
          collected feedback on 3 new users in order to analyze its strengths,
          weaknesses and pain points. I also analyzed Hotjar videos of the
          existing user behavior. This helped me understand what users need and
          desire from the site.
        </p>
        <img
          style={{ width: "100%" }}
          alt="Research & improvement Takeaways"
          src={testinginsights}
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <small>key improvement #1</small>
        <h3>Building the design system</h3>
        <p>
          After conducting an audit into all the existing design resources and
          code libraries and talking to key team members, it was clear there was
          a lack of single source of truth and disconnection between design and
          development. The style throughout the site was wildly inconsistent and
          not adhering to any brand personality.
        </p>
        <br />
        <img
          style={{ width: "100%" }}
          alt="design system objectives"
          src={designSystemObjectives}
        />
        <br />
        <br />
        <p>
          One of the greatest challenges I faced was how to integrate this into
          the developers’ workflow, most of which had not worked with such a
          styleguide before. Creating the global stylesheet within the codebase,
          and adding code snippets throughout the documentation, allowed for
          quick plug and play of the defined styles.
          <br /> <br />
        </p>
        <ProjectLinkContainer links={styleguideLink}></ProjectLinkContainer>

        <img
          style={{ width: "100%", marginTop: "60px" }}
          src={designSystemPages}
          alt="Design System Pages"
        />
      </ProjectTextSection>

      {/* <ScreenshotContainer>
        <img src={rDesignSystem} alt="Design system" />
      </ScreenshotContainer> */}

      <ProjectTextSection>
        <small>key improvement #2</small>
        <h3>Restructuring information on key pages</h3>
        <img
          style={{ width: "100%", marginTop: "60px" }}
          src={redesignedHomePage}
          alt="redesigned home page"
        />
        <img
          style={{ width: "100%", marginTop: "60px" }}
          src={redesignedOrgTools}
          alt="redesigned org tools"
        />
      </ProjectTextSection>

      <ProjectTextSection>
        <small>key improvement #3</small>
        <h3>Redesigning key pages</h3>
        <br />
        <br />
        <ScreenshotContainer>
          <p>Revised sign up flow</p>
          <video src={signUpFlowVid} loop muted autoPlay playsInline></video>
          <p>
            Broke sign up flow into step by step process with engaging
            interactions
          </p>
        </ScreenshotContainer>
      </ProjectTextSection>

      <ScreenshotContainer>
        <p>Revised landing page</p>
        <video src={rDemo} loop muted autoPlay playsInline></video>
      </ScreenshotContainer>

      <ProjectTextSection>
        <small>Learnings & Takeaways</small>
        <h3>Looking back and running forward</h3>
        <p>
          I truly enjoyed working on this project, from starting our first
          design system from scratch to coming up with user flows and page
          wireframes, even getting to build most of my designs out.
        </p>
        <p>
          <b>My main takeaway – </b> Communicating the importance of
          user-centric design to higher-ups and stakeholders. I had to conduct
          user interviews and usability testing in my own time, with my own
          family and friends to prove to the higher-ups that an improved design,
          and new styleguide was worth the time and effort.
        </p>
        <p>
          <b>If I had more time – </b> I would have wanted to conduct more
          thorough user research, user flows and revise from scratch the entire
          information hierarchy of the site for all personas.
        </p>
        <p>
          After my internship, my design system and designs are still in use
          today during entrepreneurial programs and it’s really cool knowing
          that I was directing the entire brand look and feel of the company.
        </p>
      </ProjectTextSection>

      <ScreenshotContainer>
        <img src={rEnd} alt="Ending banner" />
      </ScreenshotContainer>

      <ProjectNextCase />
    </Layout>
  );
};

export default RescaleLab;
