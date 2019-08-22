import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import './Navbar.css';

const MenuIcon = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  width: 80%;
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
        <img src='/assets/icons/menu_black.svg' alt='menu' height='30px' />
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
