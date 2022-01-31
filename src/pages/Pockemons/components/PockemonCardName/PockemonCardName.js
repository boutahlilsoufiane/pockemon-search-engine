import React from 'react';
import styles from './PockemonCardName.module.css';

const PockemonCardName = ({ name }) => {
  return <div className={styles.pockemonCardName}>{name}</div>;
};
export default PockemonCardName;
