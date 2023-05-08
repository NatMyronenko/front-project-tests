import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    blue: {
      50: '#f7fafc',
      100: '#C6D1ED',
      400: '#5c81e1',
      600: '#202F53',
      700: '#1F4AB8',
      900: '#111f42',
    },
    gray: {
      100: 'rgba(181, 194, 227, 0.15)',
      400: '#bcbcbc',
    },
    red: {
      400: '#E0729B',
      900: '#ff0000',
    },
    green: {
      100: '#CDD3CE',
      400: '#3FAD47',
      700: '#26992E',
    },
    pink: {
      400: '#E0729B',
      700: '#E0578A',
    },
    yellow: {
      100: '#CDD3CE',
      400: '#E0B346',
      700: '#EAAE1E',
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Lato, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
  },
});
