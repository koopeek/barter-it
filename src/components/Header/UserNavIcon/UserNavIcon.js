import React from 'react';
import UserSettingsList from '../UserNavList/UserNavList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './UserNavIcon.scss';

const UserNavIcon = () => {
  return (
    <div className="navigation__list__item__userSettings">
      <FontAwesomeIcon
        icon={faUserAlt}
        size="3x"
        className="navigation__list__item__userSettings__icon"
      />
      <div className="navigation__list__item__userSettings__triangle">
        <div className="test"></div>
      </div>
      <div className="navigation__list__item__userSettings__box">
        <ul>
          <UserSettingsList />
        </ul>
      </div>
    </div>
  );
};

export default UserNavIcon;
