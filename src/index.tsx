import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './config/theme';
import 'react-datepicker/dist/react-datepicker.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
