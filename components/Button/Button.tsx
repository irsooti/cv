import React from 'react';
import classes from './Button.module.css';

type Props = {
  type: 'button' | 'a';
  onClick: () => void;
  onHover: () => void;
  size: 'lg' | 'md' | 'xs';
  id: string;
  className: string;
};

export const Button: React.FC<Partial<Props>> = ({
  type = 'button',
  size = 'md',
  children,
  ...props
}) => {
  return React.createElement(
    type,
    {
      ...props,
      className: `${classes.box} ${classes[`box--${size}`]} ${
        props.className || ''
      }`,
    },
    children
  );
};
