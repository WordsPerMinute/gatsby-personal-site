import React from "react"
import { graphql } from "gatsby"
import ContentHeader from "../components/ContentHeader"
import Layout from "../components/Layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
        <ContentHeader headerText="Welcome"/>
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