import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import React from "react";
import Header from "../../components/projects/projectHeader";

export default function Pomopals() {
  return (
    <Layout>
      <Header
        projName="PomoPals (Hack&Roll 2022 Most Beautiful Hack)"
        projDesc="Coming Soon"
      />
      <StaticImage src="../../assets/projects/pomopals/hero.png" alt="Hero" />
    </Layout>
  );
}
