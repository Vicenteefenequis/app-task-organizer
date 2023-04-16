import React from 'react';
import { Circles } from 'react-loader-spinner';
import Styles from './style.module.scss';
import { Box } from '@chakra-ui/react';

type Props = {
  show: boolean;
};

const Loader: React.FC<Props> = ({ show }) => {
  if (!show) return null;
  return (
    <Box className={Styles.loaderWrap}>
      <Circles width={100} height={100} visible={true} />
    </Box>
  );
};

export default Loader;
