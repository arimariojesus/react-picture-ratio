import React, { CSSProperties, ImgHTMLAttributes, useRef } from 'react';
import styles from './Picture.module.css';

import { convertAspectRatioToPercentage as convertRatio } from '../utils/convertAspectRatioToPercentage';
import { handleRemoveClassName } from '../utils/handleRemoveClassName';

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
}

const RATIO_DEFAULT = '4:3';

function Picture({
  aspectRatio = RATIO_DEFAULT,
  ...props
}: PictureProps): JSX.Element {
  const boxStyles = { '--ratio': convertRatio(aspectRatio) } as CSSProperties;
  const pictureRef = useRef<HTMLElement>(null);

  return (
    <picture
      ref={pictureRef}
      className={`${props.className ? props.className : ''} ${
        styles.ratioBox
      } ${styles.shimmerEffect}`}
      style={boxStyles}
    >
      <img
        src={props.src}
        alt={props.alt}
        loading="lazy"
        className={styles.image}
        onLoad={() =>
          handleRemoveClassName(pictureRef.current, styles.shimmerEffect)
        }
        onError={() =>
          handleRemoveClassName(pictureRef.current, styles.shimmerEffect)
        }
      />
    </picture>
  );
}

export default Picture;
