import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled, devices } from '../../config/global'
import { AboutRightCall, AboutLeftCall } from '../components/Call'
import { BenefitsIntro } from '../components/Intro'
import { BenefitsInfo } from '../components/Info'
import Taste from '../components/elements/images/Taste'
import Nutrients from '../components/elements/images/Nutrients'

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

const Company = () => (
  <Layout>
    <SEO title="Benefits of Our Honey" />
    <BenefitsIntro />
    <Container>
      <BenefitsInfo
        title="Powerful Nutrients"
        text="Honey has been used for centuries for healing and rejuvenation. Most of
        the honey sold in stores has been heated and pasteurized. This
        processing destroys all of the enzymes and beneficial compounds that
        make raw honey so nutritious. Our honey is completely left
        in its natural state right from the hives and therefore contains pollen,
        enzymes, antioxidants and many other beneficial compounds that
        researchers are just beginning to learn the great benefits about."
      >
        <Nutrients />
      </BenefitsInfo>
      <BenefitsInfo
        title="Incredible Taste"
        text="Regular honey often looks clear and
        syrupy. Our honey has not been treated with heat; it is often more
        buttery, solid and opaque than pasteurized honey. This difference results in a richer and more decadent taste. It makes everything you put it in taste better. Real products from nature always tastes the best."
      >
        <Taste />
      </BenefitsInfo>
    </Container>
    <AboutRightCall
      title="A Simple Mission"
      text="We started with a simple promise: to sell honey that people love while paying attention to our impact on the world. We kept that promise every day since."
      link="/company"
      btnText="The Hoover Honey Story"
    />
    <AboutLeftCall
      title="Changing the world one jar at a time"
      text="We have designed our company from the start to be sustainable, compassionate and eco friendly. Every jar you buy of our honey is a vote for a better future for humanity and the world."
      link="/impact"
      btnText="The Impact of Choosing Sustainable"
    />
  </Layout>
)

export default Company
