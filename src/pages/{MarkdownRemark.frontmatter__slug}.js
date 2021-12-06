import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Head title={frontmatter.title} />
      <div className="blog-post">
        <p>{frontmatter.title}</p>
        <h1>{frontmatter.description}</h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
      }
    }
  }
`