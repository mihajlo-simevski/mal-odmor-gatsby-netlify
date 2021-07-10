import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/hero";
import HeroSecond from "../components/heroSecond";
import AboutUsCore from "../components/about-us-core";
import Gallery from "../components/gallery";


const IndexPage = () => (
  <Layout>
    <SEO title="Почетна" />
    
    <HeroSecond/>
    <AboutUsCore/>
    <Gallery/>
  </Layout>
)

export default IndexPage
