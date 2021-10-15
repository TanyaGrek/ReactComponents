import React from 'react';
import { SearchFormWrapper, SearchButton, SearchInput } from './SearchForm.styles';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Row } from '../../assets/styles/Row';

export const SearchForm = () => {
  return (
    <SearchFormWrapper>
      <Row justifyContent='space-between' alignItems='center'>
        <SearchInput>
          <Input placeholder='What do you want to watch?'/>
        </SearchInput>
        <SearchButton>
          <Button size='m' type='full' title='Search' onClick={() => console.log('Search clikedd')} />
        </SearchButton>
      </Row>
    </SearchFormWrapper>
  )
};
