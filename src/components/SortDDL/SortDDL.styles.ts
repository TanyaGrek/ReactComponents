import styled from 'styled-components';
import { backgroundColor, primaryTextColor } from '../../constants/colors';

export const SortDDLWrapper = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  flex-grow: 2;
`
export const SortDDLTitle = styled.span`
  opacity: 0.6;
`
export const SortDDLSelect = styled.select`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  background-color: ${backgroundColor};
  color: ${primaryTextColor};
  border: none;
  outline: none;
`