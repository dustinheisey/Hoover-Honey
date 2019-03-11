import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { AboutRightCall, AboutLeftCall } from '../components/Call'
import { CompanyIntro } from '../components/Intro'
// import Team from "../components/Team";

const Company = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CompanyIntro />
    {/* <Team /> */}
    <AboutRightCall
      title="Placeholder Benefits Call"
      text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus. Aliquyam et no ipsum sit aliquyam. Lorem et at rebum rebum rebum. Dolore stet gubergren sit at sadipscing."
      link="/benefits"
      btnText="Action"
    />
    <AboutLeftCall
      title="Placeholder Impacts Call"
      text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus. Aliquyam et no ipsum sit aliquyam. Lorem et at rebum rebum rebum. Dolore stet gubergren sit at sadipscing."
      link="/impact"
      btnText="Action"
    />
  </Layout>
)

export default Company
