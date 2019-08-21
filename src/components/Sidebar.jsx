import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  background: white;
`;

const Sidebar = (props) => {
  const { toggleComponent } = props;

  return (
    <Bar>
      <div className='sidenav'>
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
    </Bar>
  );
};

export default Sidebar;
