import Typography from 'typography'
import { devices } from './global'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  scaleRatio: 6,
  headerFontFamily: [
    'Searocks',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: () => ({
    h1: {
      color: 'var(--accent-2)',
      fontSize: '400%',
    },
    h2: {
      fontSize: '300%',
      color: 'var(--dark-2)',
    },
    h3: {
      fontSize: '200%',
      color: 'var(--dark-2)',
    },
    h4: {
      fontSize: '100%',
      color: 'var(--light-2)',
    },
    p: {
      color: 'var(--dark-1)',
      maxWidth: '75ch',
    },
    '@media only screen and (min-width:48em)': {
      h1: {
        color: 'var(--accent-2)',
        fontSize: '500%',
      },
      h2: {
        fontSize: '400%',
        color: 'var(--dark-2)',
      },
      h3: {
        fontSize: '300%',
        color: 'var(--dark-2)',
      },
      h4: {
        fontSize: '200%',
        color: 'var(--light-2)',
      },
      p: {
        color: 'var(--dark-1)',
        maxWidth: '75ch',
      },
    },
  }),
})

export default typography
