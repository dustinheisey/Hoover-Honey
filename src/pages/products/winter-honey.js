import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { styled, devices } from '../../../config/global'
import Honey from '../../components/elements/images/Honey'
import { BtnPrimary } from '../../components/elements/Button'
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

const WinterHoney = () => (
  <Layout>
    <Container>
      <SEO title="Winter Honey" keywords={[]} />
      <Heading>Winter Honey</Heading>
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
        <BtnPrimary text="Add to Cart" link="/" />
      </Content>
      <StoreCall />
    </Container>
  </Layout>
)

export default WinterHoney
