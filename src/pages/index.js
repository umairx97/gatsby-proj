import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Markdown from '../components/markdown';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Markdown/>
  </Layout>
)

export default IndexPage
