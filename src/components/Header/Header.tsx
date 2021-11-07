import React from 'react';
import logo from 'assets/images/logo.svg';
import { Container } from 'assets/styles/Container';
import { Row } from 'assets/styles/Row';
import { HeaderWrapper, Logo, Title } from './Header.styles';
import { SearchForm } from '../../modules/SearchForm/SearchForm';
import { AddMovie } from '../../modules/AddMovie/AddMovie';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row justifyContent='space-between' alignItems='center'>
          <Logo><img src={logo} alt="logo" /></Logo>
          <AddMovie />
        </Row>
        <Row justifyContent='center'>
          <Container>
            <Title>FIND YOUR MOViE</Title>
            <SearchForm />
          </Container>
        </Row>
      </Container>
    </HeaderWrapper>
  )
};
