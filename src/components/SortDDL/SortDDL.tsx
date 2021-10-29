import React from 'react';
import { Row } from 'assets/styles';
import { SortDDLSelect, SortDDLTitle, SortDDLWrapper } from './SortDDL.styles';

export const SortDDL = () => {
  return (
    <SortDDLWrapper>
      <Row justifyContent='flex-end' alignItems='center'>
        <SortDDLTitle>Sort by</SortDDLTitle>
        <SortDDLSelect>
          <option>release date</option>
          <option>rating</option>
        </SortDDLSelect>
      </Row>
    </SortDDLWrapper>
  )
}