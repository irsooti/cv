import React, { FC } from 'react';
import classes from './Layout.module.css';

const Layout: FC = ({ children }) => {
  return <div className={classes.box}>{children}</div>;
};

export default Layout;
