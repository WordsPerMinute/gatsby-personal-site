import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (

    <Layout>
      <Header headerText="Welcome aboard"/>
      <p>What a world!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
 
  );
}