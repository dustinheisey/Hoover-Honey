import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled, devices } from '../../config/global'

import Placeholder from '../components/elements/images/Image'
import { AboutRightCall, AboutLeftCall } from '../components/Call'
import { ImpactIntro } from '../components/Intro'
import { ImpactInfo } from '../components/Info'

const ImpactGrid = styled.section`
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: var(--md);
    margin-top: 20vmin;
  }

  width: var(--width);
  margin-top: 20vmin;
`
const Impact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ImpactIntro />

    <ImpactGrid>
      <ImpactInfo
        title="Impact 1"
        text="Ipsum ipsum labore amet eos accusam consetetur clita. Clita dolor justo labore labore et. Aliquyam ipsum justo et ut. Sit ea ipsum dolor ipsum aliquyam amet tempor sit. Et invidunt et ea sanctus et aliquyam magna gubergren elitr, et ut labore clita dolore. Et elitr eos sanctus est. No et magna dolore ea ipsum no. Eirmod sed et stet et dolores sadipscing est. Diam ipsum amet amet et clita amet sit sanctus. Ut et ut dolores dolor duo dolores. Amet stet clita ipsum ut elitr et. Amet invidunt amet magna tempor invidunt diam. At aliquyam kasd invidunt voluptua ipsum takimata.."
      >
        <Placeholder />
      </ImpactInfo>
      <ImpactInfo
        title="Impact 2"
        text="Ipsum ipsum labore amet eos accusam consetetur clita. Clita dolor justo labore labore et. Aliquyam ipsum justo et ut. Sit ea ipsum dolor ipsum aliquyam amet tempor sit. Et invidunt et ea sanctus et aliquyam magna gubergren elitr, et ut labore clita dolore. Et elitr eos sanctus est. No et magna dolore ea ipsum no. Eirmod sed et stet et dolores sadipscing est. Diam ipsum amet amet et clita amet sit sanctus. Ut et ut dolores dolor duo dolores. Amet stet clita ipsum ut elitr et. Amet invidunt amet magna tempor invidunt diam. At aliquyam kasd invidunt voluptua ipsum takimata.."
      >
        <Placeholder />
      </ImpactInfo>
    </ImpactGrid>
    <AboutRightCall
      title="Placeholder Company Call"
      text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus. Aliquyam et no ipsum sit aliquyam. Lorem et at rebum rebum rebum. Dolore stet gubergren sit at sadipscing."
      link="/company"
      btnText="Action"
    />
    <AboutLeftCall
      title="Placeholder Benefits Call"
      text="Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est gubergren justo elitr lorem, takimata est justo eirmod sanctus. Aliquyam et no ipsum sit aliquyam. Lorem et at rebum rebum rebum. Dolore stet gubergren sit at sadipscing."
      link="/benefits"
      btnText="Action"
    />
  </Layout>
)

export default Impact
