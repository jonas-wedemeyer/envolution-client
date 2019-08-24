import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';
import styled from './node_modules/styled-components';

import './Navbar.css';

const MenuIcon = styled.div`
  position: relative;
  top: 0;
  right: 0;
  z-index: 999;
  width: 35%;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Navbar = () => {
  const handleClick = () => {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open');
  };

  return (
    <>
      <MenuIcon className='nav__icon' type='menu-fold' onClick={handleClick}>
        <img
          src='/assets/icons/menu-thick-black.png'
          alt='menu'
          height='42px'
        />
      </MenuIcon>
      <div id='wrapper' className='wrapper'>
        <div className='nav'>
          <div className='nav__body'>
            <ul>
              <li>
                <StyledLink to='/projects/city/Barcelona' onClick={handleClick}>
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/myprofile' onClick={handleClick}>
                  My Profile
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/newproject' onClick={handleClick}>
                  Post a Project
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/' onClick={handleClick}>
                  Logout
                </StyledLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;