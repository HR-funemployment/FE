import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider, Box } from '@chakra-ui/react';
import App from './App';
import store from './state/store';
import './styles/index.css';
import theme from './chakra';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box
          h='100%'
          w='100%'
          backgroundColor={theme.colors.background[100]}
          display='flex'
          flexDirection='column'
        >
          <App />
        </Box>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
