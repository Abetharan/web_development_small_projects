import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    teal: {
      500: '#319795', // Custom shade for teal.500
      700: '#2C7A7B', // Custom shade for teal.700
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`, // Custom font for headings
    body: `'Raleway', sans-serif`,      // Custom font for body text
  },
});

export default customTheme;