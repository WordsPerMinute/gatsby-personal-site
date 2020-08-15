import React from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import Layout from "../components/Layout";
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { SizeMe } from 'react-sizeme'
import samplepdf from './Resume.pdf'

export default function Resume({ data }) {
 
  return (
    <Layout>
        <ContentHeader headerText="Resume"/>
        <p>
          <a href="https://coreyhodge.net/Resume.pdf" target='_blank' rel='noopener noreferrer'>View</a>
          <span> or </span>
          <a href="https://coreyhodge.net/Resume.pdf" target='_blank' rel='noopener noreferrer'>save</a>
          <span></span>
        </p>
        <SizeMe>
        {({ size }) => (
            <Document
              className="resume"
              file={samplepdf}
              renderAnnotationLayer={true}
              externalLinkTarget="_blank">
              <Page pageNumber={1} width={size.width ? 698 : 1}/>
            </Document>
          )}
        </SizeMe>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`