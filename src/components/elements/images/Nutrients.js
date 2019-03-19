import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Nutrients = () => (
  <StaticQuery
    query={graphql`
      query {
        Nutrients: file(relativePath: { eq: "nutrients.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.Nutrients.childImageSharp.fluid} />}
  />
)

export default Nutrients
