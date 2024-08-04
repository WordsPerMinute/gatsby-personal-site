import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"


export default function BlogPost({ data }) {
    const post = data.markdownRemark

    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp

    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <GatsbyImage fluid={featuredImgFluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export function Head({ data }) {
    const post = data.markdownRemark
    return (
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
      />
    )
  }
  

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED, width: 800)
                    }
                }
            }
        }
    }
`