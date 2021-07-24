import React from 'react';
import Icon from '@/public/external-link-alt-solid.svg';
import classes from './Navbar.module.css';

type Props = {
  href: string;
};

export const NavbarExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <li className={classes.externalLink}>
      <a href={href}>
        <Icon />
        {children}
      </a>
    </li>
  );
};
