import React from "react"
import { slide as Menu } from 'react-burger-menu'
import { Link } from "gatsby"
import './BurgerMenu.scss'

export default class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render (props) {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="burger-menu-wrapper">
        <Menu right >
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
        </Menu>
      </div>
    );
  }
}