import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"




export default function Footer(props) {
  return (
    <footer>
        <FaLinkedin className="fa-icon" />
        <FaMedium className="fa-icon" />
        <FaGithubSquare className="fa-icon" />
        <FaEnvelopeSquare className="fa-icon" />
    </footer>
  )
}