import React from 'react';
import { Link } from 'react-router-dom';

// import { Barcelona, Belize, Birmingham, Monterrey, Quintero, Valencia } from '../assets/Cities/';
import Barcelona from '../assets/Cities/Barcelona.jpg';

import Button from './Button';

const cities = {
  Barcelona,
  //   'Belize': Belize,
  //   'Birmingham': Birmingham,
  //   'Monterrey': Monterrey,
  //   'Quintero': Quintero,
  //   'Valencia': Valencia,
  // }
};

// TODO create array of icons of city images to loop through

function UserInfo(props) {
  const {
    firstName,
    lastName,
    picture,
    aboutMe,
    interests,
    city,
  } = props.selectedUser; // eslint-disable-line

  // function showUserPicture() {
  //   picture
  //   ? <img src={picture} alt='user profile' height='100px' />
  //   : <img src='../assets/placeholders/user.png' alt='generic user icon' height='100px' />
  // }

  // function showLocationPicture() {
  //   city
  //   ? <img src={cities[city]} alt='location of user' height='100px' />
  //   : <img src='../assets/placeholders/city.png' alt='generic location icon' height='100px' />
  // }

  // fix below when icons have been added to assets folder
  function showUserInterests() {
    const userInterests = interests.map((icon) => (
      <li key={icon}>
        <img
          href={`../assets/${icon}`}
          alt='icon of user environmental focus'
        />
      </li>
    ));
    return <ul>{userInterests}</ul>;
  }

  // TODO: add current location to be displayed (maybe associate a picture from assets folder with it)
  // TODO: add information about # of orgs served and projects completed

  return (
    <div>
      <div>
        {city ? (
          <img src={cities[city]} alt='location of user' height='100px' />
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
      </div>
      <div>
        <p>Environmental focus:</p>
        <div>{showUserInterests()}</div>
      </div>
      <div>
        <div>Organizations served:</div>
        <div>Projects completed:</div>
      </div>
      <div>
        <ul>
          <p>See all projects</p>
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
