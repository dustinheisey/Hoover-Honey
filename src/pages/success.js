import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled } from '../../config/global'
import { BtnPrimary } from '../components/elements/Button'

const Container = styled.main`
  padding: var(--lg);
`
const Success = () => (
  <Layout>
    <SEO title="Success" />
    <Container>
      <h1>Success</h1>
      <p>
        We just received your message and we will respond ASAP! Thanks so much!
      </p>
      <BtnPrimary text="Go Home" link="/" />
    </Container>
  </Layout>
)

export default Success
