import React from 'react'

import { styled, devices } from '../../config/global'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { VideoCall, IndexCall, StoreCall } from '../components/Call'
import Honey from '../components/elements/images/Honey'

const Container = styled.main`
  width: var(--width);
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--md);
    align-items: center;
    justify-items: center;
  }

  @media ${devices.desktop} {
    display: block;
  }
`
const Index = () => (
  <Layout>
    <SEO title="Home" />
    <VideoCall />
    <Container>
      <IndexCall
        title="Summer Honey Heading"
        text="Lorem eirmod at sadipscing elitr kasd et elitr justo. Consetetur stet accusam labore dolore sit dolore ea et, voluptua no diam lorem vero vero vero accusam diam. Et dolores sit clita accusam diam magna diam et accusam. Est dolor vero sed dolore ipsum diam no eirmod stet, takimata et vero."
        link="/products/summer-honey"
        btnText="Go to Summer Honey"
      >
        <Honey />
      </IndexCall>
      <IndexCall
        title="Winter Honey Heading"
        text="Lorem eirmod at sadipscing elitr kasd et elitr justo. Consetetur stet accusam labore dolore sit dolore ea et, voluptua no diam lorem vero vero vero accusam diam. Et dolores sit clita accusam diam magna diam et accusam. Est dolor vero sed dolore ipsum diam no eirmod stet, takimata et vero."
        link="/products/winter-honey"
        btnText="Go to Winter Honey"
      >
        <Honey />
      </IndexCall>
      <IndexCall
        title="Honey Bundle Heading"
        text="Lorem eirmod at sadipscing elitr kasd et elitr justo. Consetetur stet accusam labore dolore sit dolore ea et, voluptua no diam lorem vero vero vero accusam diam. Et dolores sit clita accusam diam magna diam et accusam. Est dolor vero sed dolore ipsum diam no eirmod stet, takimata et vero."
        link="/products/honey-bundle"
        btnText="Go to Honey Bundle"
      >
        <Honey />
      </IndexCall>
    </Container>
    <StoreCall />
  </Layout>
)

export default Index
