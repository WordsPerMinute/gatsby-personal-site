import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
// import { BsWindow } from 'react-icons/bs'
import { DiGithubBadge } from 'react-icons/di'
import { FaYoutubeSquare } from 'react-icons/fa'

export default function Projects({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Projects"/>
        <section className="project-cards-container">
          <card className="project-card">
            <div className="project-header">
              <h2>FoodTrucks.Show</h2>
              <div className="project-icons">
                <a href="https://www.youtube.com/watch?v=tLvKEjiw-aU" alt="Demo video for FoodTrucks.Show"><FaYoutubeSquare className="icon youtube-icon" /></a>
                <a href="https://github.com/WordsPerMinute/food-trucks-show" alt="Git Hub repo for FoodTrucks.Show"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={require('../images/fts_overview.gif')}  alt="overview animation for FoodTrucks.Show"/>
            <p>
              Show local Denver food trucks on a lightweight and easy to use interface
            </p>
          </card>
          <card className="project-card">
            <div className="project-header">
              <h2>You, but Better</h2>
              <div className="project-icons">
                <a href="https://github.com/WordsPerMinute/you-but-better" alt="Git Hub repo for You, but Better"><DiGithubBadge className="icon github-icon" /></a>

              </div>
            </div>
            <img src={require('../images/ybb_overview.gif')}  alt="overview animation for You, but Better"/>
            <p>
            Social goal accountability app, designed around the SMART goal framework
            </p>
          </card>
          <card className="project-card">
            <div className="project-header">
              <h2>Match to Speak</h2>
              <div className="project-icons">
                <a href="https://github.com/WordsPerMinute/Match-To-Speak" alt="Git Hub repo for Match to Speak"><DiGithubBadge className="icon github-icon" /></a>
              </div>
            </div>
            <img src={require('../images/mts_overview.gif')} alt="overview animation for Match to Speak"/>
            <p>
            Proof of concept app to match foreign language learners with teachers
            </p>
          </card>
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