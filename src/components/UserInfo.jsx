import React from 'react';
import { Link } from 'react-router-dom';

import back from '../assets/icons/back-thick.svg';
import pin from '../assets/icons/pin.png';
import Barcelona from '../assets/Cities/Barcelona.jpg';
import Belize from '../assets/Cities/Belize.jpg';
import Birmingham from '../assets/Cities/Birmingham.jpg';
import Monterrey from '../assets/Cities/Monterrey.jpg';
import Quintero from '../assets/Cities/Quintero.jpg';
import Valencia from '../assets/Cities/Valencia.jpg';

import {
  BackgroundImage,
  CategoryIcon,
  ColumnWrapper,
  IconBox,
  InfoContainer,
  MainTitleBlack,
  ProfilePicture,
  SecondaryButton,
  TopPage,
  Pin,
  Location,
  LocationTitle,
  Number,
  NumberOne,
  Statistics,
  EnvironmentalBox,
  TextAboutMe,
} from '../styled-components';

const cities = {
  Barcelona,
  Belize,
  Birmingham,
  Monterrey,
  Quintero,
  Valencia,
};

function UserInfo({ loggedUser }) {
  const { firstName, lastName, picture, aboutMe, interests, city } = loggedUser;

  function showUserInterests() {
    const userInterests =
      interests &&
      interests.map((interest) => (
        <CategoryIcon
          key={interest}
          src={`/assets/icons/${interest}.png`}
          alt={`icon of ${interest} focus`}
        />
      ));
    return <ul>{userInterests}</ul>;
  }

  return (
    <ColumnWrapper>
      <TopPage>
        <Link to='/projects'>
          <img src={back} alt='back' height='30px' />
        </Link>
      </TopPage>
      <BackgroundImage image={cities[city]}>
        <Location>
          <ProfilePicture src={picture} alt='location of user' height='100px' />
          <Pin src={pin} alt='pin' />
          <LocationTitle>BARCELONA</LocationTitle>
        </Location>
      </BackgroundImage>
      <InfoContainer>
        <MainTitleBlack>
          {firstName}
          &nbsp;
          {lastName}
        </MainTitleBlack>
        <IconBox>{showUserInterests()}</IconBox>
        <TextAboutMe>
          <p>{aboutMe}</p>
        </TextAboutMe>
        <EnvironmentalBox>
          <NumberOne>1</NumberOne>
          <NumberOne>1</NumberOne>
          <Number>0</Number>
        </EnvironmentalBox>
        <EnvironmentalBox>
          <Statistics>My Projects</Statistics>
          <Statistics> My Organizations</Statistics>
          <Statistics> Hours Spent</Statistics>
        </EnvironmentalBox>
        <SecondaryButton type='submit'>See your projects</SecondaryButton>
      </InfoContainer>
    </ColumnWrapper>
  );
}

export default UserInfo;
