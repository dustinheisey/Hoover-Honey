import React from 'react'
import propTypes from 'prop-types'
import { styled, devices } from '../../../config/global'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${devices.tablet} {
    width: 25vmin;
  }
`

const ImgContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  margin-bottom: var(--md);

  @media ${devices.tablet} {
    width: var(--width);
  }
`

const Heading = styled.h3`
  font-size: 200%;
`

const TeamMember = ({ children, title }) => (
  <Container>
    <ImgContainer>{children}</ImgContainer>
    <Heading>{title}</Heading>
  </Container>
)

TeamMember.propTypes = {
  children: propTypes.any.isRequired,
  title: propTypes.string.isRequired,
}

export default TeamMember
