import React from "react"
import { graphql } from "gatsby"
import ContentHeader from "../components/ContentHeader"
import Layout from "../components/Layout"
import Helmet from "react-helmet"


export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
        <Helmet>
          <meta name="description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta name="keywords" content="blog, web developer, software engineer, gatsby, colorado" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Corey Hodge / Colorado" />
          <meta property="og:description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta property="og:image" content="http://www.coreyhodge.net/assets/corey.png" />
          <meta property="og:locale" content="LINK TO THE IMAGE FILE" />
          <meta property="og:url" content="https://www.coreyhodge.net" />
          <meta property="og:site_name" content="Corey Hodge / Colorado" />
          <link rel="canonical" href="https://www.coreyhodge.net" />
        </Helmet>
        <ContentHeader headerText="Welcome!" thumbsUp />
        <p>
          I am a full stack developer who has lived in 10 U.S. states, Chile, and Germany. I have a passion for how digital networks help us connect and learn across borders.
        </p>
        <p>
          I have experience building web applications, managing marketing assets, and public speaking. On teams, my distinct background has taught me what is possible when we compassionately expect excellence from each other.
        </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`