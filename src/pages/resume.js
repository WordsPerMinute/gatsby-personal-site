import React from "react";
import { graphql } from "gatsby";

import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
import Helmet from "react-helmet"

import { FaExternalLinkAlt } from 'react-icons/fa'


export default function Resume({ data }) {
 
  return (
    <Layout>
        <Helmet>
          <meta name="description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta name="keywords" content="blog, web developer, software engineer, gatsby, colorado" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CoreyHodge.net - Welcome" />
          <meta property="og:description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta property="og:image" content="http://www.coreyhodge.net/assets/corey.png" />
          <meta property="og:locale" content="LINK TO THE IMAGE FILE" />
          <meta property="og:url" content="https://www.coreyhodge.net/resume" />
          <meta property="og:site_name" content="Corey Hodge / Colorado" />
          <title>CoreyHodge.net - Welcome</title>
          <link rel="canonical" href="https://www.coreyhodge.net/resume" />
        </Helmet>
        <ContentHeader headerText="Resume"/>
        <h4 className="section-subheading resume-heading-link">
          <span className="resume-text">
            <a href="https://coreyhodge.net/Resume.pdf" target='_blank' rel='noopener noreferrer'>Download  <FaExternalLinkAlt className="icon external-icon" /></a>
          </span>
        </h4>
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