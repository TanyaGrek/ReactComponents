import React from 'react';
import { InputWrapper } from './Input.styles';

interface IInput {
  placeholder: string;
}

export const Input = ({ placeholder } : IInput) => {
  return (
    <InputWrapper placeholder={placeholder} />
  )
};
