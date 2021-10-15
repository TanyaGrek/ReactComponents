import styled from 'styled-components';

import { primaryTextColor } from 'constants/colors';
import header from 'assets/images/Header.png';

export const HeaderWrapper = styled.div`
  background-color: transparent;
  background-image: url("${header}");
  padding: 20px 0 150px;
`
export const Logo = styled.div`
  background-color: transparent;
  z-index: 99999999;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${primaryTextColor};
`