import React from "react";
import Layout from "../components/layout";
import Header from "../components/projects/projectHeader";
import ProjectSplitshow from "../components/projects/projectSplitshow";
import { allProjects } from "../data";

export default function Projects() {
  const leftItems = [];
  const rightItems = [];

  allProjects.map((project, index) => {
    if (index % 2 === 0) {
      leftItems.push({
        imgSrc: project.squareImageUrl,
        caption: project.title,
        description: project.description,
        tags: project.tags,
        transitionCol: project.transitionCol,
        link: project.link,
      });
    } else {
      rightItems.push({
        imgSrc: project.squareImageUrl,
        caption: project.title,
        description: project.description,
        tags: project.tags,
        transitionCol: project.transitionCol,
        link: project.link,
      });
    }
  });

  return (
    <Layout title="Projects – Tiffany Chan">
      <Header projDesc="all projects" />
      <ProjectSplitshow
        clickable
        leftItems={leftItems}
        rightItems={rightItems}
      ></ProjectSplitshow>
    </Layout>
  );
}
