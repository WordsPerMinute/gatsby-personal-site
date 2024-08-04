import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/seo"


export default function BlogPost({ data }) {
    const post = data.markdownRemark
    console.log(post)

    let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
        <Layout>
            <Seo title={post.frontmatter.title} description={post.excerpt} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={featuredImgFluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
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
                        fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`