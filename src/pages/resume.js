import { React, useState } from "react";
import { graphql } from "gatsby";
import ContentHeader from '../components/ContentHeader'
import { Document, Page } from 'react-pdf';
import Layout from "../components/Layout";

export default function Resume({ data }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
        <ContentHeader headerText="Resume"/>
        <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
        </p>
        <Document
          file="http://coreyhodge.net/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess} 
        >
          <Page pageNumber={pageNumber} />
        </Document>

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