import React from 'react';
import classes from './Typography.module.css';

export const A = (props: any) => {
  return (
    <a className={classes.a} {...props}>
      {props.children}
    </a>
  );
};
