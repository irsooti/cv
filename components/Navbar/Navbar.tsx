import React from 'react';
import Avatar from '@/components/Avatar';
import classes from './Navbar.module.css';
import me from '@/public/me.jpeg';
import { NavbarTop } from './NavbarTop';
import { NavbarBottom } from './NavbarBottom';
import { NavbarMiddle } from './NavbarMiddle';
import { NavbarLinks } from './NavbarLinks';
import { NavbarExternalLink } from './NavbarExternalLink';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.box}>
      <aside className={classes.content}>
        <NavbarTop>
          <Avatar src={me} alt="Daniele Irsuti" />
        </NavbarTop>
        <NavbarMiddle>
          <h1>Daniele Irsuti</h1>
        </NavbarMiddle>
        <NavbarBottom>
          <NavbarLinks>
            <NavbarExternalLink href="https://danieleirsuti.dev">
              {t('navbar.link.portfolio')}
            </NavbarExternalLink>
            <NavbarExternalLink href="https://github.com/irsooti">
              {t('navbar.link.github')}
            </NavbarExternalLink>
            <NavbarExternalLink href="mailto:irsooti@gmail.com">
              {t('navbar.link.email')}
            </NavbarExternalLink>
            <NavbarExternalLink href="https://www.linkedin.com/in/daniele-irsuti">
              {t('navbar.link.linkedin')}
            </NavbarExternalLink>
          </NavbarLinks>
        </NavbarBottom>
      </aside>
    </div>
  );
};
