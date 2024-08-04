import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
// import { FaMedium } from "react-icons/fa"


export default function Blog({ data }) {

  return (
    <Layout>
        <ContentHeader headerText="Blog"/>
        <h4 className="section-subheading">{data.allMarkdownRemark.totalCount} posts
          {/* TODO: decide whether to keep or not...*/}
          {/* <span className="special-note-medium-blog">
          —code school posts are on {
          <a href="https://medium.com/@coreyhodgedotnet" target='_blank' rel="noopener noreferrer"><FaMedium className="special-fa-icon" alt="my Medium blog" /></a>
          }</span> */}
          
          </h4>
        {/* map over the blog instances to population them on the page */}
        {data.allMarkdownRemark.edges.map(({ node }) => {
        const image = getImage(node.frontmatter.previewPic.childImageSharp.gatsbyImageData);
        return (
          
          <article className="blog-preview article-card" key={node.id}>
            <Link className="link" to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "}
                <span className="date-span">
                  {node.frontmatter.date}
                </span>
              </h3>
              <GatsbyImage image={image} className="blog-preview-pic" alt="blog preview"/>
              <p className="post-excerpt">{node.excerpt}</p>
            </Link>
          </article>
        )})}
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <meta name="description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
      <meta name="keywords" content="blog, web developer, software engineer, gatsby, colorado" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="CoreyHodge.net - Blog" />
      <meta property="og:description" content="The life and times of Colorado's Corey Hodge. You'll find his bio, projects, writings, and more, all for the low introductory price of free!" />
      <meta property="og:image" content="http://www.coreyhodge.net/assets/corey.png" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content="https://www.coreyhodge.net/blog" />
      <meta property="og:site_name" content="Corey Hodge / Colorado" />
      <title>CoreyHodge.net - Blog</title>
      <link rel="canonical" href="https://www.coreyhodge.net/blog" />
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
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            previewPic {
              childImageSharp {
                gatsbyImageData
              }
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
