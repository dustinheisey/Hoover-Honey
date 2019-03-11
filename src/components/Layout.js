import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles, { styled, devices } from '../../config/global'

import Header from './Header'
import Footer from './Footer'

const Flex = styled.main`
  padding-top: var(--xl);
  padding-bottom: var(--xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${devices.tablet} {
    padding-top: 0;
    padding-bottom: 0;
  }
`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Flex>{children}</Flex>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
