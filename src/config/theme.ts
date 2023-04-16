import { extendTheme } from '@chakra-ui/react';

const colors = {
  gray: {
    400: '#F6F6F6',
    700: '#8F8FA4',
  },
  red: {
    400: '#FF2020',
  },
  white: {
    400: '#FFFFFF',
  },
  purple: {
    400: '#672EE3',
  },
  black: {
    400: '#000000',
  },
};

export const theme = extendTheme({ colors });
