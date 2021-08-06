import Image from 'next/image';
import classes from './Typography.module.css';

export const Img = (props: any) => {
  const image = require(`../../public${props.src}`);

  return (
    <div className={classes.img}>
      <Image
        src={image}
        alt={props.alt}
        layout="intrinsic"
        placeholder="blur"
        loading="lazy"
      />
    </div>
  );
};
