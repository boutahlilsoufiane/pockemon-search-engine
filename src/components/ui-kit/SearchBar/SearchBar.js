import React from 'react';
import searchIcon from './magnifying-glass.svg';
import styles from './SearchBar.module.css';

const SearchBar = ({placeholder}) => {
  return (
    <div className={styles.searchBar}>
      <button className={styles.searchButton}>
        <img className={styles.searchIcon} src={searchIcon} />
      </button>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder || "Search"}
      />
    </div>
  );
};
export default SearchBar;
