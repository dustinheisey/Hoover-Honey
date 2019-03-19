import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { styled, devices } from '../../config/global'

import { ContactIntro } from '../components/Intro'
import Form from '../components/Form'
import { ContactStoreCall } from '../components/Call'

const Grid = styled.main`
  width: var(--width);
  @media ${devices.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.8fr;
  }

  @media ${devices.desktop} {
    padding: var(--lg);
  }
`

const contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactIntro />
    <Grid>
      <Form />
      <ContactStoreCall />
    </Grid>
  </Layout>
)

export default contact

// Find a Store

// import React from 'react'
// import Layout from '../components/Layout'
// import SEO from '../components/SEO'

// import { styled, devices } from '../../config/global'
// import { LocationCall } from '../components/Call'
// import { StoreIntro } from '../components/Intro'

// const Container = styled.section`
//   @media ${devices.tablet} {
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(2, 1fr);
//     grid-gap: var(--md);
//     width: var(--width);
//   }
//   background: linear-gradient: (var(--accent-1), var(--aaccent-2));
//   display: grid;
//   width: 100%;
//   margin: var(--md);
//   grid-gap: var(--md);

//   align-items: center;
//   justify-items: center;
// `

// const Call = styled(LocationCall)`
//   border-radius: 40px;
//   background: var(--dark-1);
//   color: light;
// `

// const Store = () => (
//   <Layout>
//     <SEO title="Find a Store" />
//     <StoreIntro />
//     <Container>
//       <Call
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//         btnText="Acton"
//       />
//       <LocationCall
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//       />
//       <LocationCall
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//       />
//       <LocationCall
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//       />
//       <LocationCall
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//       />
//       <LocationCall
//         title="Placeholder"
//         text="No lorem consetetur sit et sea sanctus gubergren."
//         link="/"
//       />
//     </Container>
//   </Layout>
// )

// export default Store
