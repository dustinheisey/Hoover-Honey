import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { AboutRightCall, AboutLeftCall } from '../components/Call'
import { CompanyIntro } from '../components/Intro'
// import Team from "../components/Team";

const Company = () => (
  <Layout>
    <SEO title="Our Company" />
    <CompanyIntro />
    {/* <Team /> */}
    <AboutRightCall
      title="A healthy addition to your life"
      text="Our honey is raw, unfiltered and locally produced. This preserves an immense amount of beneficial compounds and properties that help you live a healthier life."
      link="/benefits"
      btnText="Benefits of Raw Local Honey"
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
