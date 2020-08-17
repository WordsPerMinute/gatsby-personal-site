import React from "react"

export default function ContentHeader(props) {
  return (
    <h1>
      {!props.noThumb ? <img src={require("../../public/favicon.ico")} className="thumbs-up-icon" alt="Corey's actual thumb as an icon"/> : null}
      {props.headerText}
      {props.siteName}
    </h1>
  )
}