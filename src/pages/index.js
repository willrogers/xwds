import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Crosswords" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Crosswords</h1>
    <p>Some crossword notes and my own crosswords.</p>
    <Link to="/basics/">Some help for new starters</Link>
    <Link to="/xwd/">A crossword</Link>
  </Layout>
)

export default IndexPage
