import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import React from "react";
import Header from "../../components/projects/projectHeader";
import ProjectNextCase from "../../components/projects/projectNextCase";
import ProjectTextSection from "../../components/projects/projectTextSection";
import ProjectLinkContainer from "../../components/projects/projectLinkContainer";

const links = [
  {
    link: "https://devpost.com/software/pomopals-mp3hzs",
    name: "Devpost Entry",
  },
  { link: "https://github.com/pomopals-HNR/pomopals-fe", name: "Github Repo" },
];

export default function Pomopals() {
  return (
    <Layout>
      <Header
        projName="PomoPals"
        projDesc="Pomodoro timer for remote teams"
        caption="HACK&ROLL 2022 MOST BEAUTIFUL HACK"
      />
      <StaticImage src="../../images/pomopals/hero.png" alt="Hero" />

      <ProjectTextSection>
        <h3>Background</h3>
        <p>
          PomoPals is a web app built for Hack&Roll 2022, Singapore's largest
          student-run hackathon with 700 participants and 250 hacks.
          <br />
          <br />
          My team worked on PomoPals, a pomodoro timer for remote teams and
          groups of friends. The inspiration came from our daily struggles as
          students. Pre-Covid, we used to study together since we all stayed in
          hall. However, once we shifted out of hall and with the pandemic
          ongoing, it wasn't as easy to study together. As students, many of us
          face the monsters of unproductivity and procrastination, which are all
          the more harder to fight alone.
          <br />
          <br />
          For this project, I worked on the design and front-end.
        </p>

        <ProjectLinkContainer links={links}></ProjectLinkContainer>
      </ProjectTextSection>

      <ProjectTextSection>
        <h2>Case study coming soon</h2>
      </ProjectTextSection>
      <ProjectNextCase link="/projects/vibing" transitionCol="#EFF6FB" />
    </Layout>
  );
}
