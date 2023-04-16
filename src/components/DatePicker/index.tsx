import { Input } from '@chakra-ui/react';
import React from 'react';
import ReactDatePicker from 'react-datepicker';

type Props = {
  value: Date;
  onChange: (date: Date) => void;
};

const DatePicker: React.FC<Props> = ({ value, onChange }) => {
  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      dateFormat={'dd/MM/yyyy'}
      showTimeSelect
      customInput={<Input />}
    />
  );
};

export default DatePicker;
