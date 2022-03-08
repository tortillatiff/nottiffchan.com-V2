import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ScreenshotContainer from "../../components/projects/projectScreenshotContainer";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";
import ProjectNextCase from "../../components/projects/projectNextCase";

import vibingDemo from "../../images/vibing/vibingDemo.mp4";
import vibingLeftOne from "../../images/vibing/vibingLeftOne.png";
import vibingLeftTwo from "../../images/vibing/vibingLeftTwo.png";
import vibingLeftThree from "../../images/vibing/vibingLeftThree.png";
import vibingRightOne from "../../images/vibing/vibingRightOne.png";
import vibingRightTwo from "../../images/vibing/vibingRightTwo.png";
import vibingRightThree from "../../images/vibing/vibingRightThree.png";

const links = [
  { link: "https://v-ibing.herokuapp.com/", name: "Live Site" },
  { link: "https://github.com/nottiffchan/vibing", name: "Github Repo" },
];

const leftItems = [
  {
    imgSrc: vibingLeftOne,
    caption:
      "User authenticates their Spotify account, then enters their name and a friend’s.",
  },
  { imgSrc: vibingLeftTwo, caption: "" },
  {
    imgSrc: vibingLeftThree,
    caption:
      "Algorithm generates a ready-to-play Spotify playlist based on the 4 songs inputted",
  },
];

const rightItems = [
  { imgSrc: vibingRightOne, caption: "" },
  {
    imgSrc: vibingRightTwo,
    caption:
      "Both individuals enter 2 songs each that encapsulate the vibe of music they like",
  },
  { imgSrc: vibingRightThree, caption: "" },
];

const Vibing = () => {
  return (
    <Layout title="vibing. – Tiffany Chan">
      <Header
        projName="vibing."
        projDesc="Personalized Spotify playlists for friends"
        caption="HACKATHON PROJECT • VISUAL DESIGN • DEVELOPMENT"
      />
      <StaticImage src="../../images/vibing/hero.png" alt="Hero image" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          vibing. is a web app developed for Hack&Roll 2021, an annual hackathon
          organized by NUS Hackers.
          <br />
          <br />I love listening to music. And when hanging out with a friend it
          is sometimes difficult to listen to music together due to differing
          tastes, and having to individually queue songs that both of you would
          also enjoy is often a hassle. Using the Spotify API, vibing.
          automatically generates a playlist with songs that both you and your
          friend are likely to vibe to.
        </p>
        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ScreenshotContainer>
        <video src={vibingDemo} loop muted autoPlay playsInline></video>
      </ScreenshotContainer>

      <ProjectTextSection>
        <h3>
          Tech stack: <br /> Angular, NodeJS, Spotify API
        </h3>
        <p>
          It was truly a novel experience for me as my first real web
          development (full-stack ish?) project one of my first real design
          projects as well, I kept the design language clean and minimal to
          bring the focus onto the core functionality.
        </p>
      </ProjectTextSection>

      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <ProjectTextSection style={{ paddingTop: "0" }}>
        <p>
          I’m really proud of this app. Although it’s humble and has a rather
          simple concept, to me it represents a milestone that I realised I had
          reached as a developer. During the hackathon itself, as a team of
          amateurs with 0 dev experience, we were unable to figure out the
          Spotify auth process and how to call the API functions within 24
          hours, and tragically could not submit a fully functional product at
          the end of the hackathon.
          <br />
          <br />2 months later however, with a renewed sense of purpose, I
          excitedly turned my sights back to vibing. However, I found that the
          front-end code I did previously, with zero front-end experience, was
          terrible and I basically redid the entire app. The moment it was
          deployed and I listened to the first playlist it generated, I realised
          that maybe my imposter syndrome is really just that, and for that
          reason this particular project makes me feel a bit better about
          myself. ok thanks for listening to my ted talk
        </p>
      </ProjectTextSection>
      <ProjectNextCase />
    </Layout>
  );
};

export default Vibing;
