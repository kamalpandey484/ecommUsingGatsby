import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../components/Reusable/HeroSection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import CartCourses from "../components/Cart/CartCourses"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="This is Tile"
      subTitle="This is Subtitle"
      heroClass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <CartCourses courses={data.myCourses} />
    <DualInfoBlock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    myCourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
