import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import GlobalStyles, { styled, devices } from '../../config/global'

import Header from './Header'
import Footer from './Footer'

const Flex = styled.main`
  padding-top: var(--xxl);
  padding-bottom: 20vmin;
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
    <Helmet>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <script
        type="text/javascript"
        id="snipcart"
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        data-api-key="MzRhZGUzZGUtMDk2ZS00YzVjLWIyNjktOTFjZGM4YTE5ODQzNjM2ODczMzkwNDM2MTg1MjE5"
      />
    </Helmet>
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
