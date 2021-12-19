import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";

import rDemo from "../../assets/projects/RescaleLab/rDemo.mp4";
import rDesignSystem from "../../assets/projects/RescaleLab/rDesignSystem.png";
import rEnd from "../../assets/projects/RescaleLab/rEnd.png";
import rLeftOne from "../../assets/projects/RescaleLab/rLeftOne.png";
import rLeftTwo from "../../assets/projects/RescaleLab/rLeftTwo.png";
import rLeftThree from "../../assets/projects/RescaleLab/rleftThree.png";
import rRightOne from "../../assets/projects/RescaleLab/rRightOne.png";
import rRightTwo from "../../assets/projects/RescaleLab/rRightTwo.png";

const links = [
  { link: "https://www.rescalelab.com/", name: "Live Site" },
  { link: "/", name: "Full UX Case Study" },
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
  { imgSrc: rLeftThree, caption: "" },
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
];

const RescaleLab = () => {
  return (
    <Layout>
      <Header
        projName="Rescale Lab"
        projDesc="SaaS platform for entrepreneurs"
      />
      <StaticImage src="../../assets/projects/RescaleLab/hero.png" alt="Hero" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          From Jan - June 2021, I was a full stack developer intern at Rescale
          Lab, a tech startup that aims to provide aspiring entrepreneurs with
          the connectivity and guidance to build a successful startup using
          their online platform.
          <br />
          <br />
          Over time, as the platform grew in features it was imperative that a
          consistent style and visual language had to be maintained across all
          areas of the product. I realised the pressing need for collection of
          reusable components, guided by clear principles that can be combined
          together to create simple and complex experiences, as needed.
          Following this, I spearheaded the team effort in a complete user flow
          and UI/UX overhaul.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ScreenshotContainer>
        <video src={rDemo} loop muted autoPlay playsInline></video>
      </ScreenshotContainer>

      <ProjectTextSection>
        <h3>Polishing the brand identity and building a design system</h3>
        <p>
          Due to the amount of user feedback that the style throughout the site
          was wildly inconsistent and not adhering to any brand personality, I
          decided to invest more time into building a design system with ready
          to use UI components and styles that the dev team, and future
          designers could use to guide their design decisions.
          <br />
          <br />
          One challenge I faced was facilitating the adoption of this system
          with the other developers, most of which had not worked with such a
          style guide before and were used to copy-pasting hex color values. One
          of the ways I did this was by creating the global stylesheet within
          the codebase, and adding code snippets throughout the styleguide to
          allow for the dev team (which included myself) to quickly plug and
          play the styles using the variables I had already defined.
          <br /> <br />
          The link to the current version of the design system can be found
          <a href="/">here</a>.
        </p>
      </ProjectTextSection>

      <ScreenshotContainer>
        <img src={rDesignSystem} alt="Design system" />
      </ScreenshotContainer>

      <ProjectTextSection>
        <h3>
          Tech stack: <br /> Angular, NodeJS, MySQL, Express
        </h3>
      </ProjectTextSection>

      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <ProjectTextSection style={{ marginTop: "-200px" }}>
        <p>
          I truly enjoyed working on this project, from starting our first
          design system from scratch to coming up with user flows and page
          wireframes, even getting to build most of my designs out. Having the
          opportunity to give the confusing and outdated-feeling site a major
          overhaul really pushed me to read up on things like standard practices
          for UX research procedures, and implementing things in the frontend.
        </p>
        <p>
          After doing some preliminary user testing, the feedback is really
          encouraging and it's really cool knowing that I was directing the
          entire brand look and feel of the company. Being a developer and the
          only designer in a startup gave me a lot of autonomy to explore and
          build the artistic direction of the site freely while still being able
          to consider the technical constraints, and I feel that this really
          helped me pick things up rapidly since I had to do everything on my
          own.
        </p>
      </ProjectTextSection>

      <ScreenshotContainer>
        <img src={rEnd} alt="Ending banner" />
      </ScreenshotContainer>
    </Layout>
  );
};

export default RescaleLab;
