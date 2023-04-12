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
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
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
