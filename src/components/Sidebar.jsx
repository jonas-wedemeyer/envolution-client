import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  const { toggleSidebar } = props;

  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to='/projects' onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/myprofile' onClick={toggleSidebar}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to='/myprojects' onClick={toggleSidebar}>
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={toggleSidebar}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to='/' onClick={toggleSidebar}>
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
