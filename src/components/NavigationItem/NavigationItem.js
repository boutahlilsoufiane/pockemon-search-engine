import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = ({ title, route }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) => isActive ? styles.activeNavigationItem: styles.navigationItem}
    >
      {title}
    </NavLink>
  );
};
export default NavigationItem;
