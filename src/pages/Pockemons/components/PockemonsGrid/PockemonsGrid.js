import React from 'react';
import { PockemonCard } from '..';
import { useGetPockemons } from '../../utils';
import styles from './PockemonsGrid.module.css';

const PockemonsGrid = () => {
  const pockemonsArray = useGetPockemons();

  const pockemonsCards = pockemonsArray.map(({ id, name, picture }) => {
    return <PockemonCard key={id} pictureUrl={picture} name={name} />;
  });

  return <div className={styles.pockemonsGrid}>{pockemonsCards}</div>;
};

export default PockemonsGrid;
