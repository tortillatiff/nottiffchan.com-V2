import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import React from "react";
import Header from "../../components/projects/projectHeader";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";
import ProjectSplitshow from "../../components/projects/projectSplitshow";
import ProjectNextCase from "../../components/projects/projectNextCase";

import pomoLeftOne from "../../images/pomopals/pomoLeftOne.png";
import pomoLeftTwo from "../../images/pomopals/pomoLeftTwo.png";
import pomoLeftThree from "../../images/pomopals/pomoLeftThree.png";
import pomoRightOne from "../../images/pomopals/pomoRightOne.png";
import pomoRightTwo from "../../images/pomopals/pomoRightTwo.png";
import pomoRightThree from "../../images/pomopals/pomoRightThree.png";

const links = [
  {
    link: "https://devpost.com/software/pomopals-mp3hzs",
    name: "Devpost Entry",
  },
  { link: "https://github.com/pomopals-HNR/pomopals-fe", name: "Github Repo" },
];

const leftItems = [
  {
    imgSrc: pomoLeftOne,
    caption: "Users can create their room right from the landing page",
  },
  {
    imgSrc: pomoLeftTwo,
    caption: "User reactions to provide quick status updates",
  },
  {
    imgSrc: pomoLeftThree,
    caption:
      "Friends can share the tasks they want to complete for accountability",
  },
];

const rightItems = [
  {
    imgSrc: pomoRightOne,
    caption:
      "Different refreshing room themes to personalize your mood during breaks",
  },
  {
    imgSrc: pomoRightTwo,
    caption: "Dark mode during work time to facilitate focus",
  },
  { imgSrc: pomoRightThree, caption: "Chat feature" },
];

export default function Pomopals() {
  return (
    <Layout title="PomoPals – Tiffany Chan">
      <Header
        projName="PomoPals"
        projDesc="Pomodoro timer for remote teams"
        caption="HACKATHON PROJECT WINNER • VISUAL DESIGN • DEVELOPMENT"
      />
      <StaticImage src="../../images/pomopals/hero.png" alt="Hero" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          PomoPals is a web app built for Hack&Roll 2022, Singapore's largest
          student-run hackathon with 700 participants and 250 hacks.
          <br />
          <br />
          My team worked on PomoPals, an easy to use and intuitive virtual room
          for groups of friends and remote teams to come together. All users
          have to do is create a room and share the link with friends. In the
          room, they are able to start a pomodoro timer together, chat, take
          breaks together and write down their tasks for each other to see,
          among other features. Most importantly we want to encourage users to
          come together virtually and keep each other's productivity in check!
          <br />
          <br />
          For this project, I worked on the design and front-end.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h3>
          Tech stack: <br /> React, NodeJS, PostgresQL, socket.io
        </h3>
        <p>
          As a student myself, I was invested in the desire to make the
          application one that I would actually willingly use, so I had to dig
          deep to get in touch with what would actually motivate me to study and
          feel refreshed in between breaks. This informed the design language of
          the app, primarily the ability to toggle between room themes, where
          the screen would turn to a colorful and energetic shade, providing a
          breath of fresh air in between pomodoros.
        </p>
      </ProjectTextSection>

      <ProjectSplitshow
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>

      <StaticImage src="../../images/pomopals/pomoEnd.png" alt="End image" />

      <ProjectNextCase />
    </Layout>
  );
}
