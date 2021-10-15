import React from 'react';
import logo from 'assets/images/logo.svg';
import { Container } from 'assets/styles/Container';
import { FooterWrapper } from './Footer.styles';
import { Row } from '../../assets/styles/Row';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row justifyContent='center' alignItems='center'>
          <img src={logo} alt="logo" />
        </Row>
      </Container>
    </FooterWrapper>
  )
};
