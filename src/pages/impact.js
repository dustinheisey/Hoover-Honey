import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled, devices } from '../../config/global'

import { AboutRightCall, AboutLeftCall } from '../components/Call'
import { ImpactIntro } from '../components/Intro'
import { ImpactInfo } from '../components/Info'

const ImpactGrid = styled.section`
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 0.65fr 0.35fr;
    align-items: center;
    justify-items: center;
    grid-gap: var(--md);
  }

  width: var(--width);
`
const Impact = () => (
  <Layout>
    <SEO title="Your Impact" />
    <ImpactIntro />

    <ImpactGrid>
      <ImpactInfo>
        <h2
          style={{
            marginBottom: 'var(--sm)',
          }}
        >
          Sustainably Produced
        </h2>
        <p style={{ marginBottom: 'var(--sm)' }}>
          {/* Our programs include Frustration-Free Packaging and retail packaging
          standards, renewable energy and energy efficiency with our all
          electric box truck, waste minimization, product take-back, responsible
          supply chain management, social responsibility, science and
          innovation, sustainability technology, sustainable transportation, and
          environmental management. */}
          We believe in sustainability by focusing on the overall environmental
          impact of our apiaries.
        </p>
        <p>Our programs include:</p>
        <ul>
          <li>Fully Electric Delivery Truck (Zero Emissions)</li>
          <li>Sustainably Sourced Packaging (100% Recyclable)</li>
          <li>Renewable Energy (Solar implementation)</li>
          <li>Waste Minimization</li>
          <li>Socially Responsible Culture</li>
          <li>Responsible Supply Chain Management</li>
          <li>Sustainable Transportation</li>
        </ul>
      </ImpactInfo>
      <ImpactInfo>
        <h2
          style={{
            marginBottom: 'var(--sm)',
          }}
        >
          Compassionate and Ethical
        </h2>
        <p style={{ marginBottom: '0' }}>
          As beekeepers it is our personal responsibility to take great care of
          our bees. We monitor our beehives and apiaries regularly to ensure
          quality condition of the hive structures and nearby water and food
          sources, extract the honey onsite to ensure an ethical and
          compassionate procedure and communicate with local growers to work
          towards a better tomorrow for all of our local pollinators
        </p>
      </ImpactInfo>
    </ImpactGrid>
    <AboutRightCall
      title="A Simple Mission"
      text="We started with a simple promise: to sell honey that people love while paying attention to our impact on the world. We kept that promise every day since."
      link="/company"
      btnText="The Hoover Honey Story"
    />
    <AboutLeftCall
      title="A healthy addition to your life"
      text="Our honey is raw, unfiltered and locally produced. This preserves an immense amount of beneficial compounds and properties that help you live a healthier life."
      link="/benefits"
      btnText="Benefits of Raw Local Honey"
    />
  </Layout>
)

export default Impact
