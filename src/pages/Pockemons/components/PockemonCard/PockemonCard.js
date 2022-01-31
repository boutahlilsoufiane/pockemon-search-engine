import React from 'react';
import { PockemonCardName } from '..';
import styles from './PockemonCard.module.css';

const PockemonCard = ({ pictureUrl, name }) => {
  return (
    <div className={styles.pockemonCard}>
      <img src={pictureUrl} />
      <PockemonCardName name={name} />
    </div>
  );
};
export default PockemonCard;
