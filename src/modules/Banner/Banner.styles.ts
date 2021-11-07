import styled from 'styled-components';

import { backgroundColor, borderColor, primaryTextColor } from 'constants/colors';
import header from 'assets/images/Header.png';
import searchButton from 'assets/images/SearchButton.png';
import { MovieCardOptions } from '../MovieCard/MovieCard.styles';

export const BannerHr = styled.hr`
  background-color: #888;
  height:  10px;
  width: 100%;
  border: none;
  margin: 0;
  opacity: 0.5;
`
export const BannerWrapper = styled.div`
  background-color: ${backgroundColor};
  padding: 100px 0 30px;
`
export const BannerWithSearchFormWrapper = styled.div`
  background-color: transparent;
  background-image: url("${header}");
  padding: 100px 0 150px;
`

export const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${primaryTextColor};
`

export const MovieCardWrapper = styled.div`
  width: calc(100% - 360px);
  position: relative;
  &:hover ${MovieCardOptions} {
    display: block;
  }
`
export const MovieCardImage = styled.img`
  width: 322px;
  height: 455px;
  margin-bottom: 22px;
`
export const MovieCardTitle = styled.div`
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 9px;
`
export const MovieCardGenre = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
`
export const MovieCardDescription = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  opacity: 0.5;
`
export const MovieCardYear = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #F65261;
  margin: 30px 0;
`

export const BackToSearch = styled.div`
  content: '';
  position: absolute;
  top: 35px;
  right: 0;
  width: 30px;
  height: 30px;
  background-image: url("${searchButton}");
`