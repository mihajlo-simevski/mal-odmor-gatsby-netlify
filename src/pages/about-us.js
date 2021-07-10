import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsCore from "../components/about-us-core";

const AboutUs = () => (
  <Layout>
    <AboutUsCore>
      <Link to="/">Go back to the homepage</Link>
    </AboutUsCore>
    
  </Layout>
)

export default AboutUs
