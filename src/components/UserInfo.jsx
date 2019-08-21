import React from 'react';
import { Link } from 'react-router-dom';

import { Barcelona } from '../assets/Cities/Barcelona.jpg';
import { Belize } from '../assets/Cities/Belize.jpg';
import { Birmingham } from '../assets/Cities/Birmingham.jpg';
import { Monterrey } from '../assets/Cities/Monterrey.jpg';
import { Quintero } from '../assets/Cities/Quintero.jpg';
import { Valencia } from '../assets/Cities/Valencia.jpg';

// import { Forest } from '/assets/icons/tree.png';

import { Icon } from '../styled-components';

// import styled component button instead of below:
import Button from './Button';

const cities = {
  Barcelona,
  Belize,
  Birmingham,
  Monterrey,
  Quintero,
  Valencia,
};

// const icons = {
//   Forest
// }

function UserInfo({ loggedUser }) {
  const {
    firstName,
    lastName,
    picture,
    aboutMe,
    interests,
    city,
    email,
  } = loggedUser;

  // fix below when icons have been added to assets folder
  function showUserInterests() {
    const userInterests =
      interests &&
      interests.map((interest) => (
        <Icon
          src={`/assets/icons/${interest}.png`}
          alt='icon of user environmental focus'
        />
      ));
    return <ul>{userInterests}</ul>;
  }

  // TODO: add information about # of orgs served and projects completed

  return (
    <div>
      <div>
        {city ? (
          <img src={cities.city} alt='location of user' height='100px' />
        ) : (
          <img
            src='../assets/placeholders/city.png'
            alt='generic location icon'
            height='100px'
          />
        )}
      </div>
      <div>
        {picture ? (
          <img src={picture} alt='user profile' height='100px' />
        ) : (
          <img
            src='../assets/placeholders/user.png'
            alt='generic user icon'
            height='100px'
          />
        )}
      </div>
      <div>
        <p>
          {firstName}
          {lastName}
        </p>
        <p>{aboutMe}</p>
        <p>{email}</p>
      </div>
      <div>
        <p>Environmental focus:</p>
        <div>{showUserInterests()}</div>
      </div>
      <div>Projects completed:</div>
      <div>Organizations served:</div>
      <div>
        <ul>
          <p>See all of your projects</p>
          <li>
            <Link to='/projects'>
              <Button />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
