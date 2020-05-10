import React from 'react';
import { Tab } from './Tab/Tab';
import './Tabs.scss';

const Tabs = ({ currentTab, handleTabChange }) => {
  const isTabActive = tab => {
    if (tab === currentTab) return true;
    return false;
  };

  return (
    <div className="tabs">
      <ul className="tabs__list">
        <Tab
          tab="items"
          tabName="Przedmioty"
          active={isTabActive('items')}
          handleTabChange={handleTabChange}
        />
      </ul>
    </div>
  );
};

export { Tabs };
