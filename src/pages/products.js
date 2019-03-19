import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { styled, devices } from '../../config/global'
import { ProductsIntro } from '../components/Intro'
import { ProductsInfo } from '../components/Info'
import Blurb from '../components/elements/Blurb'
import Placeholder from '../components/elements/images/Image'
import SummerHoney from '../components/elements/images/SummerHoney'
import FallHoney from '../components/elements/images/FallHoney'
import HoneyBundle from '../components/elements/images/HoneyBundle'

import Local from '../images/local.svg'
import Unfiltered from '../images/raw-unfiltered.svg'
import Packaging from '../images/packaging.svg'

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
  margin-top: var(--md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

const BlurbImg = styled.img``

const Products = () => (
  <Layout>
    <SEO title="Our Honey" />
    <ProductsIntro />
    <BlurbGrid>
      <Blurb
        title="Raw and Local"
        text="Hoover Honey provides the best raw, unfiltered, honey with 100% purity through rigorous practices. Free of antibiotics, pesticides, herbicides.  We don’t dilute with rice or corn syrup adulteration and we don’t mix or cut our honey."
      >
        <div
          style={{
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            jusityContent: 'center',
          }}
        >
          <BlurbImg src={Local} alt="Raw and Local" />
        </div>
      </Blurb>
      <Blurb
        title="Unfiltered"
        text="The honey we provide is directly from our bees. Straining, not filtering, allows us to maintain the healthy benefits while removing the larger particles."
      >
        {' '}
        <div
          style={{
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            jusityContent: 'center',
          }}
        >
          <BlurbImg src={Unfiltered} alt="Unfiltered" />
        </div>
      </Blurb>
      <Blurb
        title="Careful Packaging"
        text="For the best shelf stability, we only use glass jars. Some plastic containers will allow the honey to lose water content or leech chemicals into your honey. Glass ensures Hoover Honey is the best quality and consistency every time."
      >
        {' '}
        <div
          style={{
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            jusityContent: 'center',
          }}
        >
          <BlurbImg src={Packaging} alt="Careful Packaging" />
        </div>
      </Blurb>
    </BlurbGrid>
    <ProductsGrid>
      <ProductsInfo
        title="Summer Honey"
        text="Our lighter honey is from spring flowers, grasses, trees, and shrubs. It is typically a sweeter, light flavor."
        link="/products/summer-honey"
        btnText="See Product Info"
      >
        <SummerHoney />
      </ProductsInfo>
      <ProductsInfo
        title="Fall Honey"
        text="Our darker honey is from fall trees and shrubs,  Ir is typically bolder, thicker and has a stronger nutty flavor."
        link="/products/fall-honey"
        btnText="See Product Info"
      >
        <FallHoney />
      </ProductsInfo>
      <ProductsInfo
        title="Honey Bundle"
        text="Get our Light and Dark honey with this connoisseur bundle and enjoy each of the flavor profiles."
        link="/products/honey-bundle"
        btnText="See Product Info"
      >
        <HoneyBundle />
      </ProductsInfo>
    </ProductsGrid>
    {/* <StoreCall /> */}
  </Layout>
)

export default Products
