import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.scss';
import Routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
