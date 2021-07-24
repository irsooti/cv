import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.box}>
      <h3 className={classes.title}>{t('hero.title')}</h3>
      <p className={classes.impressum}>{t('hero.impressum')}</p>
    </div>
  );
};
