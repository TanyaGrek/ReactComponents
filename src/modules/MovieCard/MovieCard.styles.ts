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
  z-index: 5;
`
export const MovieCardOptionsList = styled.ul`
  position: absolute;
  width: 190px;
  padding: 12px 0;
  margin: 20px 0 0;
  top: 10px;
  right: 14px;
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(27.1828px);
  border-radius: 4px;
`
export const MovieCardOptionsListItem = styled.li`
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  opacity: 0.8;
  padding: 6px 23px;
  list-style: none;
  &:hover {
    background-color: #F65261;
    font-weight: 500;
    opacity: 1;
  }
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