import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

// TODO create array of icons of city images to loop through

const UserInfo = (props) => {
  const {
    firstName,
    lastName,
    picture,
    aboutMe,
    interests,
  } = props.selectedUser; // eslint-disable-line

  function showUserPicture() {
    if (picture) {
      return <img src={picture} alt='User profile' height='100px' />;
    }
    return 'Please upload a profile picture';
  }

  function showUserInterests() {
    const userInterests = interests.map((icon) => (
      <li key={icon}>
        <img href={`../assets/${icon}`} alt='icon of user location' />
      </li>
    ));
    return <ul>{userInterests}</ul>;
  }

  // TODO: add current location to be displayed (maybe associate a picture from assets folder with it)
  // TODO: add information about # of orgs served and projects completed

  return (
    <div>
      <div>{showUserPicture()}</div>
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
};

export default UserInfo;
