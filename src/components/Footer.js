import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"
import { FaEnvelopeSquare } from "react-icons/fa"




export default function Footer(props) {
  return (
    <footer>
        <a href="https://linkedin.com/in/coreyhodge" target='_blank' rel="noopener noreferrer">
            <FaLinkedin className="fa-icon" />
        </a>
        <a href="https://medium.com/@coreyhodgedotnet" target='_blank' rel="noopener noreferrer">
            <FaMedium className="fa-icon" />
        </a>
        <a href="https://github.com/WordsPerMinute" target='_blank' rel="noopener noreferrer">
            <FaGithubSquare className="fa-icon" />
        </a>
        <a href="mailto:contact@coreyhodge.net" target='_blank' rel="noopener noreferrer">
            <FaEnvelopeSquare className="fa-icon" />
        </a>
    </footer>
  )
}