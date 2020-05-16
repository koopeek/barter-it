import React from 'react';
import { Items } from './Items';

const getTabContent = (type, ...rest) => {
  switch (type) {
    case 'items':
      return <Items {...rest} />;
    default:
      return null;
  }
};

export { getTabContent };
