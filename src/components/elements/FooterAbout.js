import React from 'react'
import { styled, devices } from '../../../config/global'

const Container = styled.aside`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: min-width:
  padding: var(--md);
  background: var(--dark-2);
  color: var(--light);

  @media ${devices.tablet} {
    padding: var(--lg);
  }

  @media ${devices.desktop} {
    padding: var(--md);
  }

`

const Heading = styled.h4`
  color: var(--light);
`

const Text = styled.p`
  color: var(--light);
`

const FooterAbout = () => (
  <Container>
    <Heading>About Us</Heading>
    <Text>
      Hoover Honey takes great pride in producing a premium product for our
      consumers. We focus on quality! Jarod Hoover has always been a nature
      lover and environmentalist. Being environmentally conscious with an
      interest in sustainability, Jarod strives to be eco-friendly. Jarod
      started keeping two beehives in 2013. While in high school, he grew his
      small business by word of mouth and a few local stores. He also served an
      internship with The University Of North Texas Sustainability Department.
      Connecting with many great people and becoming a UNT Sustainability
      Communities Initiative (SCI) partner helped mold Hoover Honey into a very
      eco-conscious company.  Sustainability is still a passion for Jarod. 
      Hoover Honey has now grown to providing many local customers, online sales
      and stores with happy sweet smiles.
    </Text>
  </Container>
)

export default FooterAbout
