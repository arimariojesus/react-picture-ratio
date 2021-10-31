import React, { ImgHTMLAttributes } from 'react';
import styles from './Picture.module.css';

import { convertAspectRatioToPercentage as convertRatio } from '../utils/convertAspectRatioToPercentage';

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  growOnHover?: boolean;
}

const RATIO_DEFAULT = '4:3';

function Picture({
  aspectRatio = RATIO_DEFAULT,
  growOnHover = false,
  ...props
}: PictureProps): JSX.Element {
  return (
    <picture
      className={styles.ratioBox}
      style={{ paddingTop: convertRatio(aspectRatio) }}
    >
      <img
        src={props.src}
        alt={props.alt}
        loading="lazy"
        data-grow={growOnHover}
        className={styles.image}
      />
    </picture>
  );
}

export default Picture;
