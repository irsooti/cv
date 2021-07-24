import React from 'react';
import classes from './Experience.module.css';

type Props = {
  company: string;
  description: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
};

export const Experience: React.FC<Props> = ({
  company,
  jobTitle,
  description,
  endDate,
  startDate,
}) => {
  return (
    <article className={classes.box}>
      <div className={classes.description}>
        <header>
          <h4 className={classes.company}>{company}</h4>
          <time className={classes.time}>
            {startDate} - {endDate}
          </time>
        </header>
        <h4 className={classes.role}>{jobTitle}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </article>
  );
};
