import React from "react";
import {  Link, graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
import Helmet from "react-helmet"



export default function Bio({ data }) {

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
          <meta property="og:url" content="https://www.coreyhodge.net/blog" />
          <meta property="og:site_name" content="Corey Hodge / Colorado" />
          <link rel="canonical" href="https://www.coreyhodge.net/blog" />
        </Helmet>
        <ContentHeader headerText="Blog"/>
        <h4 className="section-subheading">{data.allMarkdownRemark.totalCount} Posts</h4>
        {/* map over the blog instances to population them on the page */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="blog-preview article-card" key={node.id}>
            <Link className="link" to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "}
                <span className="date-span">
                  {node.frontmatter.date}
                </span>
              </h3>
              <img src={require(`../../content/${node.frontmatter.previewPic.relativePath}`)} className="blog-preview-pic" alt="blog preview"/>
              <p className="post-excerpt">{node.excerpt}</p>
            </Link>
          </article>
        ))}
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
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          previewPic {
            relativePath
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`