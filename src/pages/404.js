import React from "react";
import { graphql } from "gatsby";

import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function NotFound({ data }) {
 
  return (
    <Layout>
        <ContentHeader headerText="404"/>
        <h3 className="404-title">Page not found</h3>
        <p>Maybe you were dir walking? Maybe you just got lost on your CoreyHodge.net journey. No worries! Click below to return home.</p>
        <h4 className="not-found-link-wrapper">
          <span className="">
            <a href="/" target='_blank' rel='noopener noreferrer'>Return home</a>
          </span>
        </h4>
    </Layout>
  )
}

export function Head() {
    return (
      <>
        <meta name="description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
        <meta name="keywords" content="blog, web developer, software engineer, gatsby, colorado" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CoreyHodge.net - 404 - Not Found" />
        <meta property="og:description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
        <meta property="og:image" content="http://www.coreyhodge.net/assets/corey.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.coreyhodge.net/resume" />
        <meta property="og:site_name" content="Corey Hodge / Colorado" />
        <title>CoreyHodge.net - 404 - Not Found</title>
        <link rel="canonical" href="https://www.coreyhodge.net/404.html" />
      </>
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