import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
import Helmet from "react-helmet"

import { DiGithubBadge } from 'react-icons/di'
import { FaYoutubeSquare } from 'react-icons/fa'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

import sdgOverview from '../images/sdg_overview.gif';
import gotoOverview from '../images/goto_overview.png';
import ftsOverview from '../images/fts_overview.gif';
import portfolioOverview from '../images/portfolio_overview.gif';
import ybbOverview from '../images/ybb_overview.gif';
import mtsOverview from '../images/mts_overview.gif';


export default function Projects({ data }) {
  return (
    <Layout>
        <Helmet>
          <meta name="description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta name="keywords" content="blog, web developer, software engineer, gatsby, colorado" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="CoreyHodge.net - Projects" />
          <meta property="og:description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
          <meta property="og:image" content="http://www.coreyhodge.net/assets/corey.png" />
          <meta property="og:locale" content="LINK TO THE IMAGE FILE" />
          <meta property="og:url" content="https://www.coreyhodge.net/projects" />
          <meta property="og:site_name" content="Corey Hodge / Colorado" />
          <title>CoreyHodge.net - Projects</title>
          <link rel="canonical" href="https://www.coreyhodge.net/projects" />
        </Helmet>
        <ContentHeader headerText="Projects"/>
        <section className="project-cards-container">
        <div className="project-card">
            <div className="project-header">
              <h2>Spanish Diminutive Generator</h2>
              <div className="project-icons">
                <a href="https://coreyhodge.net/spanish-diminutive-generator" alt="Demo for Spanish Diminutive Generator"><FaExternalLinkSquareAlt className="icon external-icon" /></a>
                <a href="https://github.com/WordsPerMinute/spanish-diminutive-generator" alt="Git Hub repo for goto.pizza"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={sdgOverview}  alt="overview animation for Spanish Diminutive Generator" className="portrait" />
            <p>
            Input a Spanish word and get its diminutive. casa ➡️ casita, pantalón ➡️ pantaloncito
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>Goto.pizza</h2>
              <div className="project-icons">
                <a href="https://goto.pizza" alt="Demo for goto.pizza"><FaExternalLinkSquareAlt className="icon external-icon" /></a>
                <a href="https://github.com/bdell/goto.pizza" alt="Git Hub repo for goto.pizza"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={gotoOverview}  alt="overview animation for Goto.Pizza"/>
            <p>
              The fastest way to find hot pizza in your area
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>FoodTrucks.Show</h2>
              <div className="project-icons">
                <a href="https://www.youtube.com/watch?v=tLvKEjiw-aU" alt="Demo video for FoodTrucks.Show"><FaYoutubeSquare className="icon youtube-icon" /></a>
                <a href="https://github.com/WordsPerMinute/food-trucks-show" alt="Git Hub repo for FoodTrucks.Show"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={ftsOverview}  alt="overview animation for FoodTrucks.Show"/>
            <p>
              Show local Denver food trucks on a lightweight and easy to use interface
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>Portfolio</h2>
              <div className="project-icons">
                <a href="https://coreyhodge.net/old" alt="Demo for old portfolio"><FaExternalLinkSquareAlt className="icon external-icon" /></a>
                <a href="https://github.com/WordsPerMinute/portfolio-site" alt="Git Hub repo for FoodTrucks.Show"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={portfolioOverview}  alt="overview animation for Portfolio"/>
            <p>
              My past portfolio, only HTML/CSS/JS, framework-free. You're currently on the improved Gatsby redesign
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>You, but Better</h2>
              <div className="project-icons">
                <a href="https://github.com/WordsPerMinute/you-but-better" alt="Git Hub repo for You, but Better"><DiGithubBadge className="icon github-icon" /></a>

              </div>
            </div>
            <img src={ybbOverview}  alt="overview animation for You, but Better"/>
            <p>
            Social goal accountability app, designed around the SMART goal framework
            </p>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h2>Match to Speak</h2>
              <div className="project-icons">
                <a href="https://github.com/WordsPerMinute/Match-To-Speak" alt="Git Hub repo for Match to Speak"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={mtsOverview} alt="overview animation for Match to Speak"/>
            <p>
            Proof of concept app to match foreign language learners with teachers
            </p>
          </div>
        </section>
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