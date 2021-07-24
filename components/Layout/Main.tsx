import React, { FC } from 'react';
import classes from './Layout.module.css';

const Main: FC = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Main;
