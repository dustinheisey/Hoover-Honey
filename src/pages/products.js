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
        title="Key Selling Point 1"
        text="Sit vero no dolore diam sit est erat tempor, aliquyam."
      >
        <Placeholder />
      </Blurb>
      <Blurb
        title="Key Selling Point 2"
        text="Sit vero no dolore diam sit est erat tempor, aliquyam."
      >
        <Placeholder />
      </Blurb>
      <Blurb
        title="Key Selling Point 3"
        text="Sit vero no dolore diam sit est erat tempor, aliquyam."
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
        title="Winter Honey"
        text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus."
        link="/products/winter-honey"
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
