import React from "react"
import favicon from '../../static/favicon.ico'

export default function ContentHeader(props) {
  return (
    <h1>
      {!props.noThumb ? <img src={favicon} className="thumbs-up-icon" alt="Corey's actual thumb as an icon"/> : null}
      {props.headerText}
      {props.siteName}
    </h1>
  )
}