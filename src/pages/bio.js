import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function Bio({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Bio"/>
        <p>
          I am a bilingual (English/Spanish) developer who has lived in 10 U.S. states, Chile, and Germany. I have a passion for how digital networks help us connect and learn across borders.
        </p>
        <p>
          I have experience building web applications, managing marketing assets, teaching, and public speaking. On teams, my distinct background has taught me what is possible when we compassionately expect excellence from each other.
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