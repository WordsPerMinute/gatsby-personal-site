import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function Projects({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Projects"/>
        <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
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