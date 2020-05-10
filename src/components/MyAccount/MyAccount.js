import React, { useState } from 'react';
import { Tabs } from './Tabs/Tabs';
import { getTabContent } from './TabsContent/TabContentFactory';
import './MyAccount.scss';

const MyAccount = props => {
  const [currentTab, setCurrentTab] = useState('items');

  const handleTabChange = tab => {
    if (tab) {
      setCurrentTab(tab);
    }
  };

  return (
    <div className="my-account">
      <Tabs currentTab={currentTab} handleTabChange={handleTabChange} />
      {getTabContent(currentTab)}
    </div>
  );
};

export { MyAccount };
