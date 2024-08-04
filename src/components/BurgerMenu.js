import React from "react"
import { slide as Menu } from 'react-burger-menu'
import { Link } from "gatsby"
import './BurgerMenu.scss'

const BurgerMenu = ({ right = true, width = 250 }) => {

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className="burger-menu-wrapper">
      <Menu right={right} width={width}>
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
      </Menu>
    </div>
  );
}

export default BurgerMenu;