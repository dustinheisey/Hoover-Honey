import React from 'react'
import { styled, devices } from '../../config/global'
import Company from './elements/images/Company'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 var(--md);
  width: var(--width);
  padding: var(--lg);

  @media ${devices.tablet} {
    padding: 0;
  }
`

const AboutContainer = styled.div`
  @media ${devices.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  margin-bottom: var(--lg);

  @media ${devices.desktop} {
    width: 35%;
    margin-right: var(--lg);
    margin-bottom: 0;
  }
`
const CompanyIntro = () => (
  <Container>
    <h1>About Us</h1>
    <AboutContainer>
      <ImgContainer>
        <Company />
      </ImgContainer>
      <p>
        Hoover Honey takes great pride in producing a premium product for our
        consumers. We focus on quality! Jarod Hoover has always been a nature
        lover and environmentalist. Being environmentally conscious with an
        interest in sustainability, Jarod strives to be eco-friendly. Jarod
        started keeping two beehives in 2013. While in high school, he grew his
        small business by word of mouth and a few local stores. He also served
        an internship with The University Of North Texas Sustainability
        Department. Connecting with many great people and becoming a UNT
        Sustainability Communities Initiative (SCI) partner helped mold Hoover
        Honey into a very eco-conscious company.  Sustainability is still a
        passion for Jarod.  Hoover Honey has now grown to providing many local
        customers, online sales and stores with happy sweet smiles.
      </p>
    </AboutContainer>
  </Container>
)
const RowContainer = styled(Container)`
  padding: 0 var(--md);
  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: var(--sm);
  }
`
const BenefitsIntro = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // Honey has been used for centuries for healing and rejuvenation. Most of
      //   the honey sold in stores has been heated and pasteurized. This
      //   processing destroys all of the enzymes and beneficial compounds that
      //   make raw honey so nutritious. Regular honey often looks clear and
      //   syrupy. Our honey has not been treated with heat; it is often more
      //   buttery, solid and opaque than pasteurized honey. It is completely left
      //   in its natural state right from the hives and therefore contains pollen,
      //   enzymes, antioxidants and many other beneficial compounds that
      //   researchers are just beginning to learn the great benefits about.
    }}
  >
    <h1 style={{ margin: 'var(--md) 0' }}>Benefits</h1>
    <RowContainer>
      <p>
        Our Local Honey is much more than just a sweetener for your coffee.
        Check out some of the benefits below.
      </p>
      {/* <ul>
        <li>Allergy Protection</li>
        <li>Antioxidants and Phytonutrients</li>
        <li>Digestive Aid</li>
        <li>Vitamins and Minerals</li>
        <li>Topical Salve</li>
        <li>Cough Suppressant</li>
        <li>Promote relaxation and restful sleep</li>
      </ul> */}
    </RowContainer>
  </div>
)

const ImpactIntro = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1 style={{ margin: 'var(--md) 0' }}>Impact</h1>
    <RowContainer>
      {/* <div>
        <h3>Things we Do</h3>
        <ul>
          <li>Monitor beehives and apiaries regularly and frequently.</li>
          <li>
            Management (ensure the needs of the bees are met; i.e. food
            , shelter, safety).
          </li>
          <li>Local communication with growers.</li>
          <li>
            Practices adapted to local conditions (e.g. protecting winter bees).
          </li>
        </ul>
      </div> */}
      <p>
        We at Hoover Honey believe in Sustainability. Our team focuses on our
        key environmental and social impacts and opportunities for innovation.
        Learn about it below.
        {/* Our programs include Frustration-Free Packaging and retail packaging
        standards, renewable energy and energy efficiency with our all electric
        box truck, waste minimization, product take-back, responsible supply
        chain management, social responsibility, science and innovation,
        sustainability technology, sustainable transportation, and environmental
        management. As beekeepers we treat our bees very well because our
        success depends entirely on the health and wellness of our bees. */}
      </p>
    </RowContainer>
  </div>
)

const ProductsIntro = () => (
  <Container>
    <h1>Our Products</h1>
    <p>
      We take great pride in the quality of our products. This begins with the
      best care for our honey bees and is evident in every single step we take
      during harvest, extraction, and packaging.
    </p>
  </Container>
)

const ContactIntro = () => (
  <Container>
    <h1>Get in Touch</h1>
    <p>
      The staff here at hoover honey loves talking bees and honey! Please feel
      free to email us or call us with any questions or comments. Thank you for
      shopping with Hoover Honey. We appreciate your business and look forward
      to seeing you again soon!
    </p>
  </Container>
)

// const StoreIntro = () => (
//   <Container>
//     <h1>Find a Store Intro</h1>
//     <p>
//       Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
//       sadipscing accusam voluptua et et stet.
//     </p>
//   </Container>
// )

export {
  CompanyIntro,
  BenefitsIntro,
  ImpactIntro,
  ProductsIntro,
  ContactIntro,
  // StoreIntro,
}
