import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import {
  BackgroundImage,
  OrgCategoryIcon,
  ColumnWrapper,
  Date,
  Details,
  InButton,
  Info,
  InfoContainer,
  MainTitleWhite,
  SubText,
  Tag,
  TopPage,
  TransparentButton,
  SubInfo,
} from '../styled-components';

import back from '../assets/icons/back-thick.svg';

const ProjectById = (props) => {
  const {
    category,
    name,
    availability,
    organizationName,
    organizationId,
    date,
    role,
    time,
    description,
    tasks,
    qualifications,
    city,
    spacesAvailable,
    picture,
    address,
  } = props.selectedProject; // eslint-disable-line

  const [isSelected, setSelection] = useState(false);

  // map participants - extra feature to add:
  // function showParticipants() {
  //   if (participants) {
  //     const showPax = participants.map((user) => (
  //       <li key={user.userId}>
  //         <img src={user.picture} alt='category' height='40px' />
  //       </li>
  //     ));
  //     return <ul>{showPax}</ul>;
  //   }
  //   return null;
  // }

  const renderTasks = () => {
    if (tasks) {
      const showTasks = tasks.map((task) => (
        <li style={{ listStyleType: 'none' }} key={task}>
          {task}
        </li>
      ));
      return <ul>{showTasks}</ul>;
    }
    return null;
  };

  const btnClick = () => {
    setSelection(!isSelected);
  };

  const renderBtnText = () => {
    return isSelected ? 'YOU ARE IN!' : 'COUNT ME IN!';
  };

  return (
    <ColumnWrapper>
      <TopPage>
        <Link to={`/projects/city/${city}`}>
          <img src={back} alt='back' height='30px' />
        </Link>
      </TopPage>
      <BackgroundImage image={picture}>
        <Tag>
          {availability}
          <span>-term project&nbsp;&nbsp;</span>
        </Tag>
        <OrgCategoryIcon>
          <img
            src={`/assets/iconsWhite/${category}-picto-grey.png`}
            alt='categoryIcon'
            height='70px'
          />
        </OrgCategoryIcon>
        <MainTitleWhite>{name}</MainTitleWhite>
        <Date>
          <Moment format='MMM Do'>{date}</Moment>
          <span>&nbsp;at&nbsp;</span>
          <Moment format='h:mm'>{date}</Moment>
          <span>&nbsp;-&nbsp;</span>
          {time}
        </Date>
        <Link to={`/orgs/${organizationId}`}>
          <TransparentButton type='button' ngo>
            DISCOVER MORE ABOUT&nbsp;
            {organizationName}
          </TransparentButton>
        </Link>
      </BackgroundImage>
      <InfoContainer>
        <Info>
          <SubInfo>
            <h2>{role}</h2>
            <h3>{organizationName}</h3>
            <SubText>
              {spacesAvailable}
              &nbsp;spots left
            </SubText>
          </SubInfo>
        </Info>
        <InButton type='submit' onClick={btnClick} isSelected={!isSelected}>
          {renderBtnText()}
        </InButton>
        <Details>
          <h3>Project description:</h3>
          <p>{description}</p>
          <h3>Qualification level:</h3>
          <p>{qualifications}</p>
          <h3>Main tasks:</h3>
          <div>{renderTasks()}</div>
          <h3>Address:</h3>
          <p>{address}</p>
        </Details>
      </InfoContainer>
    </ColumnWrapper>
  );
};

export default ProjectById;
