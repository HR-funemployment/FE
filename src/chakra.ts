import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      500: '#FF5A5F', // coral
    },
    secondary: {
      500: '#008489', // teal
    },
    background: {
      100: '#F7F7F7', // light gray
    },
    text: {
      900: '#333333', // dark gray
    },
  },
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
    mono: `'Montserrat', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        'black-solid': {
          px: '6',
          bg: 'black',
          color: 'white',
          fontSize: '14px',
          _hover: {
            bg: 'gray.700',
          },
        },
        'border-rounded-black': {
          borderRadius: 'full',
          color: 'black',
          bg: 'transparent',
          fontSize: '12px',
          borderWidth: '1px',
          borderColor: 'gray.400',
          _hover: {
            borderColor: 'black',
          },
        },
        'transparent-underline': {
          fontSize: '14px',
          color: 'black',
          bg: 'transparent',
          border: 'none',
          textDecoration: 'underline',
          _hover: {
            bg: 'gray.200',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: 'md',
        field: {
          borderColor: 'secondary.500',
          _hover: {
            borderColor: 'secondary.600',
          },
          _focus: {
            borderColor: 'secondary.600',
            boxShadow: '0 0 0 1px rgba(0, 132, 137, 0.6)',
          },
        },
      },
    },
  },
});

export default theme;
