import React from 'react';
import { SearchBar } from './../../components';
import { Pagination, PockemonsGrid } from './components';
import styles from './Pockemons.module.css';

const Pockemons = () => {
  return (
    <div className={styles.pockemons}>
      <SearchBar placeholder="Search for a pockemon" />
      <PockemonsGrid />
      <Pagination />
    </div>
  );
};
export default Pockemons;
