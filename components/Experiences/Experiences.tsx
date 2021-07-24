import { ExperienceModel } from '@/shared/types';
import Experience from 'components/Experience';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Experiences.module.css';

type Props = {
  experiences: ExperienceModel[];
};

const Experiences: FC<Props> = ({ experiences }) => {
  const { t } = useTranslation();

  const renderExperiences = React.Children.toArray(
    experiences.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))
  );

  return (
    <div className={classes.box}>
      <h3 className={classes.title}>{t('experiences.title')}</h3>
      <div className={classes.list}>{renderExperiences}</div>
    </div>
  );
};

export default Experiences;
