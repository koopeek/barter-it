import React from 'react';
import UserSettingsList from '../UserNavList/UserNavList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './UserNavIcon.scss';

const UserNavIcon = () => {
  return (
    <div className="userNavIcon">
      <FontAwesomeIcon icon={faUserAlt} size="3x" className="userNavIcon__icon" />
      <div className="userNavIcon__triangle">
        <div className="userNavIcon__triangle__content"></div>
      </div>
      <div className="userNavIcon__list">
        <ul>
          <UserSettingsList />
        </ul>
      </div>
    </div>
  );
};

export default UserNavIcon;
