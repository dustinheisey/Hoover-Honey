import React from 'react'
import propTypes from 'prop-types'
import { styled, devices } from '../../../config/global'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: var(--width);
  text-align: center;

  @media ${devices.tablet} {
    width: 25%;
    text-align: start;
  }
`

const ImgContainer = styled.div`
  width: 80%;
  margin-bottom: var(--md);
  background: var(--light);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  @media ${devices.tablet} {
    width: 100%;
`
const Blurb = ({ children, title, text }) => (
  <Container>
    {children}
    <h3>{title}</h3>
    <p>{text}</p>
  </Container>
)

Blurb.propTypes = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}

export default Blurb
