import styled from 'styled-components';

interface IRow {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props: IRow) => props.gap || "10px"};
  justify-content: ${(props: IRow) => props.justifyContent || "flex-start"};
  align-items: ${(props: IRow) => props.alignItems || "flex-start"};
`
