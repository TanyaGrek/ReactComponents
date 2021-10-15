import styled from 'styled-components';
import { primaryColor, primaryTextColor } from 'constants/colors';

interface IButtonStyles {
  type: string;
}

const buttonColors = {
  blurred: {
    background: 'rgba(96, 96, 96, 0.68)',
    color: primaryColor,
    border: 'none',
  },
  full: {
    border: 'none',
    background: primaryColor,
    color: primaryTextColor,
  },
  empty: {
    background: 'transparent',
    color: primaryColor,
    border: `1.5px solid ${primaryColor}`,
  },
};

const buttonSize = {
  s: {
    padding: '11px 18px',
    width: '177px',
  },
  m: {
    padding: '18px',
    width: '180px',
  }
}

export const ButtonStyles = styled.button`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  background: ${(props: IButtonStyles) => buttonColors[props.type].background};
  color: ${(props: IButtonStyles) => buttonColors[props.type].color};
  border: ${(props: IButtonStyles) => buttonColors[props.type].border};
  padding: ${(props: IButtonStyles) => buttonSize[props.size].padding};
  min-width: ${(props: IButtonStyles) => buttonSize[props.size].width};
  &:hover {
    cursor: pointer;
  }
`