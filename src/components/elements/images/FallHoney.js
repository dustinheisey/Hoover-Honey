import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FallHoney = () => (
  <StaticQuery
    query={graphql`
      query {
        FallHoney: file(relativePath: { eq: "fall-honey.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.FallHoney.childImageSharp.fluid} />}
  />
)

export default FallHoney
