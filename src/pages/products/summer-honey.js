import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import SummerHoney from '../../components/elements/images/SummerHoney'
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

const SummerHoneyProduct = () => (
  <Layout>
    <Container>
      <SEO title="Summer Honey" />
      <Heading>Summer Honey</Heading>
      <ImgContainer>
        <SummerHoney />
      </ImgContainer>
      <Content>
        <DescriptionText>
          Our lighter honey is from spring flowers, grasses, trees, and shrubs.
          It is typically a sweeter, light flavor.
        </DescriptionText>
        <BtnPrimaryExternal
          text="Buy Now"
          link="https://hoover-honey.myshopify.com/products/summer-honey"
        />
      </Content>
      <StoreCall />
    </Container>
  </Layout>
)

export default SummerHoneyProduct
