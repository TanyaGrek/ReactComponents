import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  flex-grow: ${(props: any) => props.size || 1};
`
export const TextAreaTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #F65261;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 30px 0 13px;
`
export const TextArea = styled.textarea`
  width: 100%;
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 197px;
  border: none;
  padding: 17px 19px;
  color: #FFFFFF;
`