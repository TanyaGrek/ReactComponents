import React from 'react';
import { Container } from 'assets/styles/Container';
import { Row } from 'assets/styles/Row';
import { BannerWithSearchFormWrapper, Title } from './Banner.styles';
import { SearchForm } from 'modules/SearchForm/SearchForm';

export const BannerWithSearchForm = ({changeMode}: any) => {
  return (
    <BannerWithSearchFormWrapper>
      <Container>
        <Row justifyContent='center'>
          <Container>
            <Title onClick={changeMode}>FIND YOUR MOViE</Title>
            <SearchForm />
          </Container>
        </Row>
      </Container>
    </BannerWithSearchFormWrapper>
  )
};
