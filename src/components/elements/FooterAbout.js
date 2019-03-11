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
      Gubergren et lorem consetetur erat eos. Est dolor dolor nonumy eos est
      gubergren justo elitr lorem, takimata est justo eirmod sanctus. Aliquyam
      et no ipsum sit aliquyam. Lorem et at rebum rebum rebum. Dolore stet
      gubergren sit at sadipscing. Vero sit ipsum at at rebum amet ipsum. Justo
      no amet sed at takimata. Est diam no takimata ut aliquyam. Vero et eos
      diam sea. Erat ea clita sea justo sea stet, et et erat consetetur.
    </Text>
  </Container>
)

export default FooterAbout
