import React from 'react';
import { MyAccountContainer } from '../../containers/MyAccountContainer';
import './MyAccountPage.scss';

const MyAccountPage = () => {
  return (
    <div className="my-account-page">
      <div className="my-account-page__my-account">
        <MyAccountContainer />
      </div>
    </div>
  );
};

export { MyAccountPage };
