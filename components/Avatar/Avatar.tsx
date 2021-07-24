import React from 'react';
import Image from 'next/image';
import classes from './Avatar.module.css';

type Props = {
  src: StaticImageData;
  alt?: string;
};

export const Avatar: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={classes.box}>
      <Image layout="responsive" className={classes.image} src={src} alt={alt} />
    </div>
  );
};
