import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <div className='toggle'>
        <ul>
          <li>
            <Link to='/projects'>Home</Link>
          </li>
          <li>
            <Link to='/projects'>My Profile</Link>
          </li>
          <li>
            <Link to='/projects'>My Projects</Link>
          </li>
          <li>
            <Link to='/projects'>Settings</Link>
          </li>
          <li>
            <NavLink to='/projects'>Log out</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
