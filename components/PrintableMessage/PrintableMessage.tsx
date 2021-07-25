import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './PrintableMessage.module.css';

export const PrintableMessage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.box}>
      <small>{t('footer.printerFriendly')}</small>
    </div>
  );
};
