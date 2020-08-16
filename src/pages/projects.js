import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function Projects({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Projects"/>
        <section className="project-cards-container">
          <card className="project-card">
          <h2>FoodTrucks.Show</h2>

            <img src={require('../images/fts_overview.gif')}  alt="overview animation for FoodTrucks.Show"/>
            <p>
              Show local Denver food trucks on a lightweight and easy to use interface
            </p>
          </card>
          <card className="project-card">
            <img src={require('../images/ybb_overview.gif')}  alt="overview animation for You, but Better"/>
            <h2>You, but Better</h2>
            <p>
            Social goal accountability app, designed around the SMART goal framework
            </p>
          </card>
          <card className="project-card">
            <img src={require('../images/mts_overview.gif')} alt="overview animation for Match to Speak"/>
            <h2>Match to Speak</h2>
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