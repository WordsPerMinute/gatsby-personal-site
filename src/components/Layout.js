import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import BurgerMenu from './BurgerMenu'

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
    <>
    <BurgerMenu side="right" />
    <div className="site-wrapper">

      <div className="header-and-nav-wrapper">
        <header>
              <h3 className="header-title">
                <Link to={`/`}>
                {data.site.siteMetadata.title}
                </Link>
              </h3>
        </header>
        <nav className="nav">
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
              Photos
          </Link>
          <Link to={`/bio/`}>
              Email
          </Link>
        </nav>
      </div>
      <main>
        {children}
      </main>
    </div>
    </>
  )
}
