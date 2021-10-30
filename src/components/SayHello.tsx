import React from 'react';
import styles from './SayHello.module.css';

import { convertAspectRatioToPercentage as aspectRatio } from '../utils/convrtAspectRatioToPercentage';

const SayHello = ({
  name,
  ratio,
}: {
  name: string;
  ratio: string;
}): JSX.Element => (
  <div className={styles.myComponent}>
    <h2>Hey {name}, nice to meet you.</h2>
    <h4>Ratio: {aspectRatio(ratio)}</h4>
  </div>
);

export default SayHello;
