import React from 'react';
import logo from 'assets/images/logo.svg';
import { Container } from 'assets/styles/Container';
import { Row } from 'assets/styles/Row';
import { HeaderWrapper, Logo, Title } from './Header.styles';
import { Button } from '../Button/Button';
import { SearchForm } from '../../modules/SearchForm/SearchForm';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row justifyContent='space-between' alignItems='center'>
          <Logo><img src={logo} alt="logo" /></Logo>
          <Button size='s' type='blurred' title='+ Add movie' onClick={() => console.log('clikedd')} />
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
