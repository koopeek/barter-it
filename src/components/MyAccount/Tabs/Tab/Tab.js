import React from 'react';
import './Tab.scss';

const Tab = ({ tab, tabName, active, handleTabChange }) => {
  return (
    <li className={active ? 'tab tab--active' : 'tab'} onClick={() => handleTabChange(tab)}>
      {tabName}
    </li>
  );
};

export { Tab };
