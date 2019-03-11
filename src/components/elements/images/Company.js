import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Company = () => (
  <StaticQuery
    query={graphql`
      query {
        Company: file(relativePath: { eq: "about-company.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.Company.childImageSharp.fluid} />}
  />
)

export default Company
