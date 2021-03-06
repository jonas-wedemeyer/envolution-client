import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { signOut } from '../../redux/reducers/authentication/actions';
import { MenuIcon } from '../../styled-components';
import menu from '../../assets/icons/menu-thick-black.png';

import './Navbar.css';

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-nav-open');
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      <MenuIcon className='nav__icon' type='menu-fold' onClick={handleClick}>
        <img src={menu} alt='menu' height='42px' />
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
                <StyledLink to='/' onClick={handleLogout}>
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
