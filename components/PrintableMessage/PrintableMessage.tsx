import React, { useLayoutEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import classes from './PrintableMessage.module.css';

export const PrintableMessage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.box}>
      <div className={classes.printMessage}>{t('footer.printerFriendly')}</div>
      <Button onClick={window.print}>{t('footer.print')}</Button>
    </div>
  );
};
