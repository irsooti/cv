import React from 'react';
import classes from './Navbar.module.css';

export const NavbarMiddle: React.FC = ({ children }) => {
  return <div className={classes.middle}>{children}</div>;
};
