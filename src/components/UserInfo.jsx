import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Barcelona from '../assets/Cities/Barcelona.jpg';
import Belize from '../assets/Cities/Belize.jpg';
import Birmingham from '../assets/Cities/Birmingham.jpg';
import Monterrey from '../assets/Cities/Monterrey.jpg';
import Quintero from '../assets/Cities/Quintero.jpg';
import Valencia from '../assets/Cities/Valencia.jpg';

import {
  Icon,
  SecondaryButton,
  TextTitle,
  Text,
  ListFlag,
  Subtitle,
} from '../styled-components';

const cities = {
  Barcelona,
  Belize,
  Birmingham,
  Monterrey,
  Quintero,
  Valencia,
};

const EnvironmentalFlag = styled(ListFlag)`
  width: 52vw;
  margin: 10px 0 4px 20px;
`;

const IconBox = styled.div`
  margin-left: 20px;
  margin-top: 10px 0 0 20px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  position: relative;
  background: #fafafa;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 8%;
  position: absolute;
  top: 0;
  z-index: 3;
  margin: 4vh 1.5vw 0 2vw;
`;

const BgTopImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${(props) => props.image});
  height: 80vh;
  width: 100%;
  background-size: cover;
`;

const CategoryIcon = styled(Icon)`
  margin-left: ${(props) => (props.category ? '1vh' : '1vh')};
  margin: 16px 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #f9f9f9;
  position: relative;
  top: -5vh;
  width: 100%;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  border: 5px solid #d3d3d3;
  height: 24vh;
  width: 24vh;
  background: cover;
  margin: 60px 18px;
`;

const TextFirstName = styled(TextTitle)`
  padding-top: 16px;
  padding-bottom: 8px;
  font-size: 30px;
`;

const LocationTitle = styled(Subtitle)`
  align-items: flex-end;
  color: #d3d3d3;
`;

const TextLastName = styled(TextTitle)`
  padding: 10px;
  margin-top: 14px;
  font-size: 22px;
`;

const Location = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const TextAboutMe = styled(Text)`
  margin: 0 26px;
  padding-bottom: 12px;
  font-size: 12px;
  text-align: center;
`;

const Statistics = styled(Text)`
  white-space: pre;
  font-size: 11px;
  font-weight: 700;
`;

const EnvironmentalBox = styled.text`
  display: flex;
  padding: 12px;
  font-size: 12px;
  justify-content: space-around;
`;

const Number = styled.div`
  font-size: 38px;
`;

const NumberOne = styled.div`
  font-size: 38px;
  border-right: 1px solid grey;
  padding-right: 50px;
`;

const Pin = styled(Icon)`
  align-items: center;
  width: 34px;
  height: 30px;
  margin-bottom: 10px;
`;

function UserInfo({ loggedUser }) {
  const { firstName, lastName, picture, aboutMe, interests, city } = loggedUser;

  function showUserInterests() {
    const userInterests =
      interests &&
      interests.map((interest) => (
        <CategoryIcon
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
          <img src='/assets/icons/back-thick.svg' alt='back' height='30px' />
        </Link>
      </TopPage>
      <BgTopImage image={cities[city]}>
        <div>
          <ProfilePicture src={picture} alt='location of user' height='100px' />
        </div>
        <Location>
          <Pin src='/assets/icons/pin.png' alt='pin' />
          <LocationTitle>BARCELONA</LocationTitle>
        </Location>
      </BgTopImage>
      <InfoContainer>
        <EnvironmentalFlag>
          <TextFirstName>{firstName}</TextFirstName>
          <TextLastName>{lastName}</TextLastName>
        </EnvironmentalFlag>
        <IconBox>{showUserInterests()}</IconBox>
        <TextAboutMe>{aboutMe}</TextAboutMe>
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
