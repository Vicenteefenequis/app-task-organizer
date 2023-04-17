import { Input } from '@chakra-ui/react';
import React from 'react';
import ReactDatePicker from 'react-datepicker';

type Props = {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
};

const DatePicker: React.FC<Props> = ({ value, onChange, placeholder }) => {
  return (
    <ReactDatePicker
      selected={value}
      onChange={onChange}
      dateFormat={'dd/MM/yyyy'}
      showTimeSelect
      placeholderText={placeholder}
      customInput={<Input />}
    />
  );
};

export default DatePicker;
