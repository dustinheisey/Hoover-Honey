import React from 'react'
import { styled, devices } from '../../config/global'
import Company from './elements/images/Company'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: var(--md);
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
    <h1>About Our Company</h1>
    <AboutContainer>
      <ImgContainer>
        <Company />
      </ImgContainer>
      <p>
        Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
        sadipscing accusam voluptua et et stet. Takimata at lorem kasd
        sadipscing clita et. No accusam diam lorem takimata dolor sea diam diam,
        dolore amet at kasd sea sanctus, lorem dolores stet duo eos. Sed et
        ipsum ea lorem aliquyam eos amet, sea takimata est sed ipsum kasd et
        magna gubergren et. Eos et stet magna gubergren.
      </p>
    </AboutContainer>
  </Container>
)

const BenefitsIntro = () => (
  <Container>
    <h1>Benefits Intro</h1>
    <p>
      Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
      sadipscing accusam voluptua et et stet. Takimata at lorem kasd sadipscing
      clita et. No accusam diam lorem takimata dolor sea diam diam, dolore amet
      at kasd sea sanctus, lorem dolores stet duo eos. Sed et ipsum ea lorem
      aliquyam eos amet, sea takimata est sed ipsum kasd et magna gubergren et.
      Eos et stet magna gubergren.
    </p>
  </Container>
)

const ImpactIntro = () => (
  <Container>
    <h1>Impact Intro</h1>
    <p>
      Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
      sadipscing accusam voluptua et et stet. Takimata at lorem kasd sadipscing
      clita et. No accusam diam lorem takimata dolor sea diam diam, dolore amet
      at kasd sea sanctus, lorem dolores stet duo eos. Sed et ipsum ea lorem
      aliquyam eos amet, sea takimata est sed ipsum kasd et magna gubergren et.
      Eos et stet magna gubergren. Et et tempor nonumy rebum et.
    </p>
  </Container>
)

const ProductsIntro = () => (
  <Container>
    <h1>Products Intro</h1>
    <p>
      Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
      sadipscing accusam voluptua et et stet. Takimata at lorem kasd sadipscing
      clita et. No accusam diam lorem takimata dolor sea diam diam, dolore amet
      at kasd sea sanctus, lorem dolores stet duo eos. Sed et ipsum ea lorem
      aliquyam eos amet, sea takimata est sed ipsum kasd et magna gubergren et.
      Eos et stet magna gubergren.
    </p>
  </Container>
)

const ContactIntro = () => (
  <Container>
    <h1>Contact Intro</h1>
    <p>
      Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
      sadipscing accusam voluptua et et stet. Takimata at lorem kasd sadipscing
      clita et. No accusam diam lorem takimata dolor sea diam diam, dolore amet
      at kasd sea sanctus,
    </p>
  </Container>
)

const StoreIntro = () => (
  <Container>
    <h1>Find a Store Intro</h1>
    <p>
      Ea erat clita labore elitr magna sea ipsum, at eos dolor sanctus
      sadipscing accusam voluptua et et stet.
    </p>
  </Container>
)

export {
  CompanyIntro,
  BenefitsIntro,
  ImpactIntro,
  ProductsIntro,
  ContactIntro,
  StoreIntro,
}
