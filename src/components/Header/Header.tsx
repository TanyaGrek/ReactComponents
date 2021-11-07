import React from 'react';
import logo from 'assets/images/logo.svg';
import { Container } from 'assets/styles/Container';
import { Row } from 'assets/styles/Row';
import { HeaderWrapper, Logo, Title } from './Header.styles';
import { AddMovie } from '../../modules/AddMovie/AddMovie';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row justifyContent='space-between' alignItems='center'>
          <Logo><img src={logo} alt="logo" /></Logo>
          <AddMovie />
        </Row>
      </Container>
    </HeaderWrapper>
  )
};
