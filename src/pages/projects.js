import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function Projects({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Projects"/>
        <article className="project-card">
          <h2>FoodTrucks.Show</h2>
          <p>
            Show local Denver food trucks on a lightweight and easy to use interface
          </p>
          <iframe title="foodtrucks video" class="project-video" width="500" height="281" src="https://www.youtube-nocookie.com/embed/tLvKEjiw-aU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
        <article className="project-card">
          <h2>You, but Better</h2>
          <p>
          Social goal accountability app, designed around the SMART goal framework
          </p>
          <img src={require('../images/ybb_overview.gif')}  alt="overview animation for You, but Better"/>
        </article>
        <article className="project-card">
          <h2>Match to Speak</h2>
          <p>
          Proof of concept app to match foreign language learners with teachers
          </p>
          <img src={require('../images/mts_overview.gif')} alt="overview animation for Match to Speak"/>
        </article>

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