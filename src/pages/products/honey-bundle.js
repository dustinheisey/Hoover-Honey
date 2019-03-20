import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import HoneyBundle from '../../components/elements/images/HoneyBundle'
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

const HoneyBundleProduct = () => (
  <Layout>
    <Container>
      <SEO title="Honey Bundle" />
      <Heading>
        Honey Bundle{' '}
        <span
          style={{
            color: 'var(--dark-1)',
            fontSize: '75%',
            marginLeft: 'var(--sm)',
          }}
        >
          $29.87
        </span>
      </Heading>
      <ImgContainer>
        <HoneyBundle />
      </ImgContainer>
      <Content>
        <DescriptionText>
          Get our Light and Dark honey with this connoisseur bundle and enjoy
          each of the flavor profiles. Eat it or enjoy its many uses in tea,
          coffee, and cooking. We keep both on hand in our personal kitchens to
          use with different recipes, and as a topping or natural sweetener.
        </DescriptionText>
        <BtnPrimaryExternal
          text="Buy Now"
          link="https://hoover-honey.myshopify.com/products/summer-fall-honey-bundle"
        />
      </Content>
      <StoreCall />
    </Container>
  </Layout>
)

export default HoneyBundleProduct
