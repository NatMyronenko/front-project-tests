import React from 'react';
import { Input } from '@chakra-ui/react';

export const InputBox = ({
  formik,
  placeholder,
  isValid,
  name,
  type = 'text',
}) => {
  return (
    <Input
      pl="6"
      py="2.5"
      bg="white"
      border={
        formik.dirty && formik.values[name] && !isValid
          ? '1px solid #E0729B'
          : 'none'
      }
      color="blue.900"
      boxShadow="inset 1px 1px 1px rgba(92, 129, 225, 0.32)"
      size="md"
      type={type}
      name={name}
      required
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder={placeholder}
      _placeholder={{ color: 'gray.400', fontSize: '20px' }}
      value={formik.values[name]}
    />
  );
};
