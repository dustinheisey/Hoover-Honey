import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import Honey from '../../components/elements/images/Honey'
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
    width: 50%;
    margin-bottom: var(--sm);
  }
`

const DescriptionText = styled.p`
  width: var(--width);
  padding-top: var(--md);
  @media ${devices.tablet} {
    width: 65ch;
  }
`

const SummerHoney = () => (
  <Layout>
    <Container>
      <SEO title="Summer Honey" keywords={[]} />
      <Heading>Summer Honey</Heading>
      <ImgContainer>
        <Honey />
      </ImgContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
          style={{
            borderRadius: '5px',
            alignItems: 'center',
            alignSelf: 'flex-start',
            justifyContent: 'center',
            padding: 'var(--sm) var(--lg)',
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            border: 'none',
            outline: 'none',
            background: 'var(--accent-1)',
            color: 'var(--light)',
          }}
        >
          Add to Cart
        </button>
      </div>
      <StoreCall />
    </Container>
  </Layout>
)

export default SummerHoney
