import React from 'react'
import { styled, devices } from '../../config/global'

import FooterAbout from './elements/FooterAbout'
import Sitemap from './elements/Sitemap'
import Copywrite from './elements/Copywrite'

const Container = styled.footer`
  display: none;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    background: var(--dark-2);
    padding-top: var(--md);
  }
`

const Up = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Footer = () => (
  <Container>
    <Up>
      <FooterAbout />
      <Sitemap />
    </Up>
    <Copywrite />
  </Container>
)

export default Footer
