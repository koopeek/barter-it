import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.scss';

const NavLink = ({ contentText, path }) => {
  return (
    <Link to={path} className="nav-link">
      {contentText}
    </Link>
  );
};

export { NavLink };
