import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Taste = () => (
  <StaticQuery
    query={graphql`
      query {
        Taste: file(relativePath: { eq: "taste.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.Taste.childImageSharp.fluid} />}
  />
)

export default Taste
