import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Barcelona from '../assets/Cities/Barcelona.jpg';
import Belize from '../assets/Cities/Belize.jpg';
import Birmingham from '../assets/Cities/Birmingham.jpg';
import Monterrey from '../assets/Cities/Monterrey.jpg';
import Quintero from '../assets/Cities/Quintero.jpg';
import Valencia from '../assets/Cities/Valencia.jpg';

import userIcon from '../assets/Placeholder/user.png';

import {
  FlexWrapper,
  Icon,
  SecondaryButton,
  TextTitle,
  Text,
  ListFlag,
} from '../styled-components';
// import { Forest } from '/assets/icons/tree.png';

const cities = {
  Barcelona,
  Belize,
  Birmingham,
  Monterrey,
  Quintero,
  Valencia,
};

const LargeIcon = styled(Icon)`
  width: 100px;
  height: 100px;
  z-index: 2;
`;

const EnvironmentalIcon = styled(Icon)`
  z-index: 2;
  padding: 1vw;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 24vh;
  width: 24vh;

  z-index: 1;
`;

const TextFirstName = styled(TextTitle)`
  padding-top: 16px;
  padding-bottom: 8px;
  font-size: 30px;
`;

const TextLastName = styled(TextTitle)`
  padding: 10px;
  margin-top: 14px;
  font-size: 22px;
`;

const TextAboutMe = styled(Text)`
  padding: 12px;
  font-size: 12px;
`;

// const CardStatistics = styled(Card)`
//   padding: 12px;
//   font-size: 12px;
//   align-items: flex-end;
// `;

const EnvironmentalBox = styled.text`
  padding: 12px;
  font-size: 12px;
`;

function UserInfo({ loggedUser }) {
  const { firstName, lastName, picture, aboutMe, interests, city } = loggedUser;

  // fix below when icons have been added to assets folder
  function showUserInterests() {
    const userInterests =
      interests &&
      interests.map((interest) => (
        <EnvironmentalIcon
          src='/assets/icons/tree.png'
          alt={`icon of ${interest} focus`}
        />
      ));
    return <ul>{userInterests}</ul>;
  }

  // TODO: add information about # of orgs served and projects completed

  return (
    <FlexWrapper>
      <div>
        <div>
          {city ? (
            <LargeIcon
              src={cities[city]}
              alt='location of user'
              height='100px'
            />
          ) : (
            <Icon
              src='../assets/Placeholder/city.png'
              alt='generic location icon'
              height='100px'
            />
          )}
        </div>
        <div>
          {picture ? (
            <ProfilePicture src={picture} alt='user profile' />
          ) : (
            <img src={userIcon} alt='generic user icon' height='160px' />
          )}
        </div>
        <ListFlag>
          <TextFirstName>{firstName}</TextFirstName>
          <TextLastName>{lastName}</TextLastName>
        </ListFlag>
        <TextAboutMe>{aboutMe}</TextAboutMe>
        <div>
          <ListFlag>Environmental focus</ListFlag>
          <div>{showUserInterests()}</div>
        </div>
        <EnvironmentalBox>
          <div>
            <div>Projects completed:</div>
            <div>Organizations served:</div>
          </div>
        </EnvironmentalBox>
        <ul>
          <li>
            <Link to='/projects'>
              <SecondaryButton>see all my projects</SecondaryButton>
            </Link>
          </li>
        </ul>
      </div>
    </FlexWrapper>
  );
}

export default UserInfo;
