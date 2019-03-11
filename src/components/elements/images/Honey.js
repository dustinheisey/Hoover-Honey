import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Honey = () => (
  <StaticQuery
    query={graphql`
      query {
        Honey: file(relativePath: { eq: "product-honey.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.Honey.childImageSharp.fluid} />}
  />
)

export default Honey
