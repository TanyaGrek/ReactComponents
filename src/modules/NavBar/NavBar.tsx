import React from 'react';
import { NavBarWrapper } from './NavBar.styles';

interface INavBar {
  children: React.ReactElement;
}

export const NavBar = ({ children }: INavBar) => {
  return (
    <NavBarWrapper>
      {children}
    </NavBarWrapper>
  )
};
