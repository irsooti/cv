import React from 'react';
import classes from './Navbar.module.css';

export const NavbarBottom: React.FC = ({ children }) => {
  return <nav className={classes.bottom}>{children}</nav>;
};
