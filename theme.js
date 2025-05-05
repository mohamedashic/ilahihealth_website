import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      200: '#80b3ff',
      300: '#4d94ff',
      400: '#1a75ff',
      500: '#004aad', // primary brand color
      600: '#003580',
      700: '#002b66',
      800: '#00204d',
      900: '#001533',
    },
    gray: {
      50: '#f9f9f9',
      100: '#f0f0f0',
      200: '#e0e0e0',
      300: '#cccccc',
      400: '#999999',
      500: '#666666',
      600: '#444444',
      700: '#333333',
      800: '#222222',
      900: '#111111',
    },
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
          _active: {
            bg: 'brand.700',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'lg',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'none',
          color: 'brand.600',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700',
      },
      h1: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'brand.500',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'brand.500',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'brand.500',
      },
    },
  },
  layerStyles: {
    card: {
      bg: 'white',
      borderRadius: 'lg',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      p: 6,
    },
    section: {
      py: { base: 12, md: 20 },
      px: { base: 4, md: 6 },
    },
  },
  textStyles: {
    stat: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: 'brand.500',
    },
    testimonial: {
      fontSize: 'lg',
      fontStyle: 'italic',
      color: 'gray.600',
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your app content */}
    </ChakraProvider>
  );
}

export default theme;