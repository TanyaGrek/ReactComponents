import React from 'react';
import { TextArea, TextAreaWrapper, TextAreaTitle } from './Textarea.styles';

interface ITextarea {
  label: string;
}

export const Textarea = ({ label } : ITextarea) => {
  return (
      <TextAreaWrapper>
        <TextAreaTitle>{label}</TextAreaTitle>
        <TextArea />
      </TextAreaWrapper>
  )
};
