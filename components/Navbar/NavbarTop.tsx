import React from 'react';
import classes from './Navbar.module.css';

export const NavbarTop: React.FC = ({ children }) => {
  return <div className={classes.top}>{children}</div>;
};
