import React from 'react';
import { NavigationItem } from '..';
import { NAV_ITEMS } from './../../utils';
import styles from './NavigationItems.module.css';

const NavigationItems = () => {
  const navigationItems = NAV_ITEMS.map(({ id, title, route }) => {
    return <NavigationItem key={id} title={title} route={route} />;
  });

  return <div className={styles.navigationItems}>{navigationItems}</div>;
};

export default NavigationItems;
