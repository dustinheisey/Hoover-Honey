import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HoneyBundle = () => (
  <StaticQuery
    query={graphql`
      query {
        HoneyBundle: file(relativePath: { eq: "bundle.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.HoneyBundle.childImageSharp.fluid} />}
  />
)

export default HoneyBundle
