import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { styled, devices } from '../../config/global'
import { LocationCall } from '../components/Call'
import { StoreIntro } from '../components/Intro'

const Container = styled.section`
  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: var(--md);
    width: var(--width);
  }
  background: linear-gradient: (var(--accent-1), var(--aaccent-2));
  display: grid;
  width: 100%;
  margin: var(--md);
  grid-gap: var(--md);

  align-items: center;
  justify-items: center;
`

const Call = styled(LocationCall)`
  border-radius: 40px;
  background: var(--dark-1);
  color: light;
`

const Store = () => (
  <Layout>
    <SEO title="Find a Store" />
    <StoreIntro />
    <Container>
      <Call
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
        btnText="Acton"
      />
      <LocationCall
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
      />
      <LocationCall
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
      />
      <LocationCall
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
      />
      <LocationCall
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
      />
      <LocationCall
        title="Placeholder"
        text="No lorem consetetur sit et sea sanctus gubergren."
        link="/"
      />
    </Container>
  </Layout>
)

export default Store
