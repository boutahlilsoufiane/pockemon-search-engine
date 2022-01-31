import React from 'react';
import { NavigationItems } from '..';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavigationItems />
    </div>
  );
};
export default Sidebar;
