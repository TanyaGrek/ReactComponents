import React from 'react';
import { InputWrapper, InputWithTitleWrapper, InputTitle, InputField } from './Input.styles';

interface IInput {
  placeholder: string;
  label: string;
  type: string;
  size: number;
}

export const Input = ({ placeholder, label, type = 'text', ...rest } : IInput) => {
  return (
    <>
      {label ? <InputWithTitleWrapper size={rest.size}>
        <InputTitle>{label}</InputTitle>
        <InputField  placeholder={placeholder} type={type} {...rest} />
        </InputWithTitleWrapper>
      : <InputWrapper placeholder={placeholder} type={type} {...rest} />}
    </>

  )
};
