import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled, devices } from '../../config/global'

import { ContactIntro } from '../components/Intro'
import Form from '../components/Form'
import { ContactStoreCall } from '../components/Call'

const Grid = styled.main`
  width: var(--width);
  @media ${devices.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    padding: var(--lg);
  }
`

const contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ContactIntro />
    <Grid>
      <Form />
      <ContactStoreCall />
    </Grid>
  </Layout>
)

export default contact
