import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { styled, devices } from '../../config/global'
import { ProductsIntro } from '../components/Intro'
import { ProductsInfo } from '../components/Info'
import Blurb from '../components/elements/Blurb'
import Placeholder from '../components/elements/images/Image'
import Honey from '../components/elements/images/Honey'

const ProductsGrid = styled.section`
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--width);
  margin-bottom: var(--lg);
`

const BlurbGrid = styled.section`
  width: var(--width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const Products = () => (
  <Layout>
    <SEO title="Our Honey" />
    <ProductsIntro />
    <BlurbGrid>
      <Blurb
        title="Raw and Local"
        text="Hoover Honey provides the best raw, unfiltered, honey with 100% purity through rigorous practices. Free of antibiotics, pesticides, herbicides.  We don’t dilute with rice or corn syrup adulteration and we don’t mix our honey with other honey."
      >
        <Placeholder />
      </Blurb>
      <Blurb
        title="Unfiltered"
        text="The honey we provide is directly from our bees. Straining, not filtering, allows us to maintain the healthy benefits while removing the larger particles."
      >
        <Placeholder />
      </Blurb>
      <Blurb
        title="Careful Packaging"
        text="For the best shelf stability, we only use glass jars, some plastic containers still allow the honey to lose water content or can leech chemicals into your honey. Glass ensures Hoover Honey is the best quality and consistency every time."
      >
        <Placeholder />
      </Blurb>
    </BlurbGrid>
    <ProductsGrid>
      <ProductsInfo
        title="Summer Honey"
        text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus."
        link="/products/summer-honey"
        btnText="See Product Info"
      >
        <Honey />
      </ProductsInfo>
      <ProductsInfo
        title="Fall Honey"
        text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus."
        link="/products/fall-honey"
        btnText="See Product Info"
      >
        <Honey />
      </ProductsInfo>
      <ProductsInfo
        title="Honey Bundle"
        text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus."
        link="/products/honey-bundle"
        btnText="See Product Info"
      >
        <Honey />
      </ProductsInfo>
    </ProductsGrid>
    {/* <StoreCall /> */}
  </Layout>
)

export default Products
