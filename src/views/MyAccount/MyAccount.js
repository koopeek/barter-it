import React, { useState } from 'react';
import { MyAccountTabs } from '../../components/MyAccountTabs/MyAccountTabs';
import './MyAccount.scss';

const MyAccount = () => {
  const [currentTab, setCurrentTab] = useState('');

  return (
    <div className="my-account-view-wrapper">
      <div className="my-account-view">
        <div>
          <MyAccountTabs />
        </div>
        <div>CONTENT</div>
      </div>
    </div>
  );
};

export { MyAccount };
