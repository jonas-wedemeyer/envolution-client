import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Bar = styled.div`
  /* display: flex;
  flex-direction: column; */
  border: 1px blue solid;
  /* background: rgba(0, 0, 0, 0.9); */
  /* top: 8%; */
  /* width: 50vw;
  height: 100vh; */
  /* width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden; */
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
