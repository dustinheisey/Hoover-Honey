import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import Honey from '../../components/elements/images/Honey'
import { BtnShop } from '../../components/elements/Button'
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

const HoneyBundle = () => (
  <Layout>
    <Container>
      <SEO title="Summer Honey" keywords={[]} />
      <Heading>Honey Bundle</Heading>
      <ImgContainer>
        <Honey />
      </ImgContainer>
      <Content>
        <DescriptionText>
          Elitr magna sadipscing lorem tempor labore ipsum accusam stet sanctus.
          Justo takimata est clita et kasd dolore diam sed clita, sea ea lorem
          ea sed ipsum sed diam. Rebum justo no at lorem accusam et clita. Dolor
          dolore ipsum sadipscing invidunt dolor diam accusam, lorem lorem lorem
          dolor sit ea. Elitr magna sadipscing lorem tempor labore ipsum accusam
          stet sanctus. Justo takimata est clita et kasd dolore diam sed clita,
          sea ea lorem ea sed ipsum sed diam. Rebum justo no at lorem accusam et
          clita. Dolor dolore ipsum sadipscing invidunt dolor diam accusam,
          lorem lorem lorem dolor sit ea. Elitr magna sadipscing lorem tempor
          labore ipsum accusam stet sanctus. Justo takimata est clita et kasd
          dolore diam sed clita
        </DescriptionText>
        <button
          type="submit"
          style={{
            borderRadius: '5px',
            outline: 'none',
            border: 'none',
            padding: 'var(--sm) var(--md)',
            cursor: 'pointer',
            display: 'inlineBlock',
            color: 'var(--light)',
            textDecoration: 'none',
            backgroundColor: 'var(--accent-1)',
            paddingLeft: 'var(--md)',
            paddingRight: 'var(--md)',
          }}
          className="snipcart-add-item"
          data-item-id="3"
          data-item-name="Honey Bundle"
          data-item-price="3.00"
          data-item-weight="20"
          data-item-url="/"
          data-item-description="Summer and Winter Honey"
        >
          Add to Cart
        </button>
      </Content>
      <StoreCall />
    </Container>
  </Layout>
)

export default HoneyBundle
