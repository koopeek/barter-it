import React from 'react';
import mainViewImage from '../../assets/svgs/mainViewImage.svg';
import Search from '../Search/Search';
import './Info.scss';

const Info = () => {
  return (
    <div className="info">
      <div className="info__info">
        <div className="info__info__content">
          <h1 className="info__info__content__header">Wymieniaj się bez wychodzenia z domu</h1>
          <p>
            Dodaj swój przedmiot lub sprawdź obecnie dostępne oferty wymiany dodane przez innych
          </p>
          <div className="info__info__content__search">
            <Search />
          </div>
        </div>
      </div>
      <div className="info__image">
        <img src={mainViewImage} alt="dd" />
      </div>
    </div>
  );
};

export default Info;
