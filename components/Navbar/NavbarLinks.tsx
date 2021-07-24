import React from 'react';
import classes from './Navbar.module.css';

export const NavbarLinks: React.FC = ({ children }) => {
  return <ul className={classes.links}>{children}</ul>;
};
