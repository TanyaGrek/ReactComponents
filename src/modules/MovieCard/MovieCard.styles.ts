import styled from 'styled-components';

export const MovieCardOptions = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 14px;
  width: 36px;
  height: 36px;
  background: #2A202D;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.196596);
  border-radius: 50%;
`
export const MovieCardWrapper = styled.div`
  width: 322px;
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
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  opacity: 0.7;
`
export const MovieCardGenre = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
`
export const MovieCardYear = styled.div`
  padding: 4px 8px;
  opacity: 0.5;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`