import styled, { css, createGlobalStyle, keyframes } from 'styled-components'

//  Global Styles
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
    background: var(--background);
  }

  :root {

    // Color
    --dark-1: #545454;
    --dark-2: #2a2a2a;
    --light: #f6f6f6;
    --background: #fafafa;
    --accent-1: #C6920D;
    --accent-2: #D09D1F;

    // Spacing
    --xs: .5vmin;
    --sm: 1vmin;
    --md: 3vmin;
    --lg: 5vmin;
    --xl: 7vmin;
    --xxl: 15vmin;

    --shadow: 0px 3px 15px rgba(0,0,0,0.2);
    --shadow-hover: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    
    --width: 90%;
  }
`

// Devices
const devices = {
  tablet: `(min-width: 48em)`,
  desktop: `(min-width: 64em)`,
}

export default GlobalStyles
export { styled, css, createGlobalStyle, keyframes, devices }
