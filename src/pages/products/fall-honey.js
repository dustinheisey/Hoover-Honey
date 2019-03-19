import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import FallHoney from '../../components/elements/images/FallHoney'
import { BtnPrimaryExternal } from '../../components/elements/Button'
import { StoreCall } from '../../components/Call'

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  padding: var(--lg);
  align-self: flex-start
  color: var(--dark);
  margin-bottom: var(--sm);
`

const ImgContainer = styled.div`
  width: var(--width);
  align-self: flex;start;
  margin-bottom: var(--lg);

  @media ${devices.tablet} {
    width: 65ch;
    margin-bottom: var(--sm);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--lg);
  @media ${devices.tablet} {
    padding: 0;
  }
`

const DescriptionText = styled.p`
  width: var(--width);
  padding-top: var(--md);

  @media ${devices.tablet} {
    width: 65ch;
  }
`

const FallHoneyProduct = () => (
  <Layout>
    <Container>
      <SEO title="Fall Honey" />
      <Heading>Fall Honey</Heading>
      <ImgContainer>
        <FallHoney />
      </ImgContainer>
      <Content>
        <DescriptionText>
          Our darker honey is from fall trees and shrubs,  It is typically
          bolder, thicker and has a stronger nutty flavor.
        </DescriptionText>
        <BtnPrimaryExternal
          text="Buy Now"
          link="https://hoover-honey.myshopify.com/products/fall-honey"
        />
      </Content>
      <StoreCall />
    </Container>
  </Layout>
)

export default FallHoneyProduct
