import React from "react";
import {  Link, graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";

export default function Bio({ data }) {
  return (
    <Layout>
        <ContentHeader headerText="Blog"/>
        <h4 className="post-count">{data.allMarkdownRemark.totalCount} Posts</h4>
        {/* map over the blog instances to population them on the page */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="blog-preview" key={node.id}>
            <Link className="link" to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
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