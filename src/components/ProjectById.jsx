import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import styled from 'styled-components';
import { Button, Icon } from '../styled-components';

// Images exports, refactoring to do:
// import Ocean from '../assets/Categories/Ocean.jpg';
// import Land from '../assets/Categories/Land.jpg';
// import Air from '../assets/Categories/Air.jpg';
// import Forest from '../assets/Categories/Forest.jpg';
// import Wildlife from '../assets/Categories/Wildlife.jpg';

// Styling Buttons:
const InButton = styled(Button)`
  margin: 2% auto;
  width: 60vw;
  background: ${(props) => (props.isSelected ? '#fff' : '#a5d6a7')};
  color: ${(props) => (props.isSelected ? '#000' : '#fff')};
  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #a5d6a7'};
`;

const NGOButton = styled(Button)`
  background: ${(props) =>
    props.ngo ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.35)'};
  color: ${(props) => (props.ngo ? '#fff' : '#fff')};
  border: ${(props) => (props.ngo ? '0px' : '0px')};
  margin: 0 1vh 10vh 2vh;
  font-size: 12px;
  padding: 0vh 2vw;
  height: 30px;
`;

// Styling other: NEED TO REMOVE FLEXWRAPPER PADDING
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  position: relative;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  width: 8%;
  position: fixed;
  top: 0;
  z-index: 3;
  margin: 2vh 0;
`;

const BgTopImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${(props) => props.image});
  height: 80vh;
  width: 110%;
  background-size: cover;
`;

const Tag = styled.div`
  height: 32px;
  align-self: flex-start;
  color: #fff;
  margin-bottom: 26vh;
  background: rgba(255, 255, 255, 0.35);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  padding: 0.5vh 1vh;
`;

const CategoryIcon = styled(Icon)`
  margin-left: ${(props) => (props.category ? '1vh' : '1vh')};
`;

const Title = styled.h1`
  display: flex;
  padding: 2vh 1vh 2vh 2vh;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  width: 90%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
  position: relative;
  top: -5vh;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1vh 1vh 1vh 1vh;
  font-size: 16px;
  justify-content: space-between;
  align-content: center;
`;

const SubInfo = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  font-size: 14px;
`;

const Date = styled.div`
  display: flex;
  flex-flow: row wrap;
  color: #fff;
  padding: 0 1vh 3vh 2vh;
  font-size: 16px;
  font-weight: bolder;
  width: 90%;
`;

const Details = styled.div`
  display: flex;
  height: 50vh;
  flex-flow: column wrap;
  padding: 2vh 2vh 2vh 1vh;
  font-size: 14px;
  justify-content: space-between;
`;

const ProjectById = (props) => {
  const {
    // category,
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
    // participants,
    spacesAvailable,
    picture,
    address,
  } = props.selectedProject; // eslint-disable-line

  // local state
  const [isSelected, setSelection] = useState(true);

  // render category pics --placeholders-- refactoring to do:
  // const renderCategoryImage = () => {
  //   if (category === 'Ocean') {
  //     return <img src={Ocean} alt='category' height='100px' />;
  //   }
  //   if (category === 'Land') {
  //     return <img src={Land} alt='category' height='100px' />;
  //   }
  //   if (category === 'Air') {
  //     return <img src={Air} alt='category' height='100px' />;
  //   }
  //   if (category === 'Forest') {
  //     return <img src={Forest} alt='category' height='100px' />;
  //   }
  //   if (category === 'Wildlife') {
  //     return <img src={Wildlife} alt='category' height='100px' />;
  //   }
  //   return <p>no picture for this category</p>;
  // };

  // map participants:
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

  // map tasks:
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
    return isSelected ? 'YOU ARE IN!' : 'I AM IN!';
  };

  return (
    <ColumnWrapper>
      <TopPage>
        <Link to='/projects'>
          <img src='/assets/icons/icon_back.svg' alt='back' height='30px' />
        </Link>
      </TopPage>
      <BgTopImage image={picture}>
        <Tag>
          {availability}
          <span>-term project&nbsp;&nbsp;</span>
        </Tag>
        <CategoryIcon src='/assets/icons/tree.png' alt='tree' category />
        <Title>{name}</Title>
        <Date>
          <Moment format='MMM Do'>{date}</Moment>
          <span>&nbsp;at&nbsp;</span>
          <Moment format='h:mm'>{date}</Moment>
          <span>&nbsp;-&nbsp;</span>
          {time}
        </Date>
        <Link to={`/orgs/${organizationId}`}>
          <NGOButton type='button' ngo>
            DISCOVER&nbsp;
            {organizationName}
          </NGOButton>
        </Link>
      </BgTopImage>
      <InfoContainer>
        <Info>
          <SubInfo>
            <h2>{role}</h2>
            <h3>{organizationName}</h3>
            <h3>
              {spacesAvailable}
              &nbsp;spots left
            </h3>
          </SubInfo>
        </Info>
        {/* <h3>Participants</h3>
          <div>{showParticipants()}</div> */}
        {/* <div>{renderCategoryImage()}</div> */}
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
