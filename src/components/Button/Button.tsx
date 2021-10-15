import React from 'react';
import { ButtonStyles } from './Button.styles';
import * as events from 'events';

interface IButton {
  type: string,
  title: string,
  size: string,
  onClick: () => events
}

export const Button = ({type, title, onClick, size}: IButton) => (
  <ButtonStyles
    type={type}
    size={size}
    onClick={onClick}
  >
    {title}
  </ButtonStyles>
)