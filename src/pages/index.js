import React from 'react'

import { styled, devices } from '../../config/global'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { VideoCall, IndexCall, StoreCall } from '../components/Call'
import FallHoney from '../components/elements/images/FallHoney'
import SummerHoney from '../components/elements/images/SummerHoney'
import HoneyBundle from '../components/elements/images/HoneyBundle'

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
        title="Summer Honey"
        price="$17.99"
        text="Our lighter honey is from spring flowers, grasses, trees, and shrubs. It is typically a sweeter, light flavor."
        link="/products/summer-honey"
        buyLink="https://hoover-honey.myshopify.com/products/summer-honey"
      >
        <SummerHoney />
      </IndexCall>
      <IndexCall
        title="Fall Honey"
        price="$17.99"
        text="Our darker honey is from fall trees and shrubs,  It is typically bolder, thicker and has a strong nutty flavor."
        link="/products/fall-honey"
        buyLink="https://hoover-honey.myshopify.com/products/fall-honey"
      >
        <FallHoney />
      </IndexCall>
      <IndexCall
        title="Honey Bundle"
        price="$$29.87"
        text="Get our Light and Dark honey with this connoisseur bundle and enjoy each of the flavor profiles."
        link="/products/honey-bundle"
        buyLink="https://hoover-honey.myshopify.com/products/summer-fall-honey-bundle"
      >
        <HoneyBundle />
      </IndexCall>
    </Container>
    <StoreCall />
  </Layout>
)

export default Index
