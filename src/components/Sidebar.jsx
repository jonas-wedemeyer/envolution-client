import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { toggleComponent } = props;

  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to='/projects' onClick={toggleComponent}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/myprofile' onClick={toggleComponent}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/myprojects' onClick={toggleComponent}>
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={toggleComponent}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to='/' onClick={toggleComponent}>
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
