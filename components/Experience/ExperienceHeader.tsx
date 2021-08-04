import React from 'react';
import classes from './Experience.module.css';

type Props = {
  title: string;
};

export const ExperienceHeader: React.FC<Props> = ({ title }) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.headerTitle}>{title}</h2>
    </header>
  );
};
