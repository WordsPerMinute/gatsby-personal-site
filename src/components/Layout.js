import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )

  return (
    <div class="site-wrapper">
      <div class="header-and-nav-wrapper">
        <header>
          <Link to={`/`}>
              <h3 class="header-title">
                {data.site.siteMetadata.title}
              </h3>
          </Link>
        </header>
        <nav className="nav">
          <Link to={`/`}>
              Home
          </Link>
          <Link to={`/projects/`}>
              Projects
          </Link>
          <Link to={`/blog/`}>
              Blog
          </Link>
          <Link to={`/resume/`}>
              Resume
          </Link>
          <Link to={`/bio/`}>
              Bio
          </Link>
        </nav>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}
