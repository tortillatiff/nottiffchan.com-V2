import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";
import ProjectNextCase from "../../components/projects/projectNextCase";

import berryDemo from "../../images/berry/berryDemo.mp4";
import berryLeftOne from "../../images/berry/berryLeftOne.png";
import berryLeftTwo from "../../images/berry/berryLeftTwo.png";
import berryLeftThree from "../../images/berry/berryLeftThree.png";
import berryRightOne from "../../images/berry/berryRightOne.png";
import berryRightTwo from "../../images/berry/berryRightTwo.png";

const links = [
  { link: "https://github.com/nottiffchan/berry", name: "Github Repo" },
];

const leftItems = [
  { imgSrc: berryLeftOne, caption: "" },
  {
    imgSrc: berryLeftTwo,
    caption: "Three different colour themes to choose from",
  },
  { imgSrc: berryLeftThree, caption: "Adding custom items" },
];

const rightItems = [
  { imgSrc: berryRightOne, caption: "Empty states" },
  { imgSrc: berryRightTwo, caption: "Saved recipes to quick-add ingredients" },
];

const Berry = () => {
  return (
    <Layout title="berry">
      <Header projName="berry" projDesc="Tile-style shopping list mobile app" />
      <StaticImage src="../../images/berry/hero.png" alt="Hero image" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          berry is a mobile application created with the Flutter framework as a
          side project. With berry, users no longer need to type out their
          grocery items one by one and look at boring lines of text, no! Simply
          tapping on the grocery tiles, already sorted by category and most
          recently used, seamlessly adds each item to your grocery list.
          <br />
          <br />
          Being a very visual person, I was tired of seeing and using to-do and
          grocery list apps which all had the same boring format. I wanted an
          aesthetically appealing and seamless avenue to make taking down
          grocery lists an engaging experience.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ScreenshotContainer>
        <video src={berryDemo} loop muted autoPlay playsInline></video>
      </ScreenshotContainer>

      <ProjectTextSection>
        <h3>
          Tech stack: <br /> Flutter
        </h3>
        <p>
          berry was such a fun project to work on. With the adorable design
          language in mind, I had a blast going wild with the visuals and
          developing it. Since grocery shopping is typically a mundane task, I
          dreamed up a special berry character that would make it more enjoyable
          and also engaging for kids to use while helping their parents out.
        </p>
      </ProjectTextSection>

      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <StaticImage src="../../images/berry/berryEnd.png" alt="End image" />

      <ProjectNextCase
        text="Back to home"
        link="/"
        transitionCol="#3d3333"
        atag={true}
      />
    </Layout>
  );
};

export default Berry;
