import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SummerHoney = () => (
  <StaticQuery
    query={graphql`
      query {
        SummerHoney: file(relativePath: { eq: "summer-honey.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.SummerHoney.childImageSharp.fluid} />}
  />
)

export default SummerHoney
