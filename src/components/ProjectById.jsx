import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import styled from 'styled-components';
import { Button } from '../styled-components';

// Images exports, refactoring to do:
import Ocean from '../assets/Categories/Ocean.jpg';
import Land from '../assets/Categories/Land.jpg';
import Air from '../assets/Categories/Air.jpg';
import Forest from '../assets/Categories/Forest.jpg';
import Wildlife from '../assets/Categories/Wildlife.jpg';

// Styling
const InButton = styled(Button)`
  background: ${(props) => (props.isSelected ? '#fff' : '#47b881')};
  color: ${(props) => (props.isSelected ? '#000' : '#fff')};
  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #47b881'};
  :hover {
    color: ${(props) => (props.isSelected ? '#47b881' : 'white')};
    border: ${(props) =>
      props.isSelected ? '2px solid #47b881' : '2px solid #47b881'};
  }
`;

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
    participants,
    spacesAvailable,
    picture,
    address,
  } = props.selectedProject; // eslint-disable-line

  // local state
  const [isSelected, setSelection] = useState(true);

  // render category pics --placeholders-- refactoring to do:
  const renderCategoryImage = () => {
    if (category === 'Ocean') {
      return <img src={Ocean} alt='category' height='100px' />;
    }
    if (category === 'Land') {
      return <img src={Land} alt='category' height='100px' />;
    }
    if (category === 'Air') {
      return <img src={Air} alt='category' height='100px' />;
    }
    if (category === 'Forest') {
      return <img src={Forest} alt='category' height='100px' />;
    }
    if (category === 'Wildlife') {
      return <img src={Wildlife} alt='category' height='100px' />;
    }
    return <p>no picture for this category</p>;
  };

  // map participants:
  function showParticipants() {
    if (participants) {
      const showPax = participants.map((user) => (
        <li key={user.userId}>
          <img src={user.picture} alt='category' height='40px' />
        </li>
      ));
      return <ul>{showPax}</ul>;
    }
    return null;
  }

  const btnClick = () => {
    setSelection(!isSelected);
  };

  const renderBtnText = () => {
    return isSelected ? 'YOU ARE IN!' : 'I AM IN!';
  };

  return (
    <div>
      <Link to='/projects'>
        <p>
          <img src='/assets/icons/icon_back.svg' alt='back' height='24px' />
        </p>
      </Link>
      <div>
        <img src={picture} alt='category' height='100px' />
      </div>
      <div>
        <h1>{name}</h1>
        <Moment format='MMM Do'>{date}</Moment>
        <p>at</p>
        <Moment format='h:mm'>{date}</Moment>
        <div>{availability}</div>
        <h3>{time}</h3>
      </div>
      <div>{renderCategoryImage()}</div>
      <div>
        <h2>{role}</h2>
        <h2>{organizationName}</h2>
      </div>
      <div>
        <h3>Participants</h3>
        <div>{showParticipants()}</div>
        <h4>{spacesAvailable}</h4>
        <h4>Spaces available:</h4>
      </div>
      <div>
        <InButton type='submit' onClick={btnClick} isSelected={!isSelected}>
          {renderBtnText()}
        </InButton>
        <Link to={`/orgs/${organizationId}`}>
          <Button type='button'>SEE MORE ON NGO</Button>
        </Link>
      </div>
      <div>
        <h3>Project description:</h3>
        <p>{description}</p>
        <h3>Qualification level:</h3>
        <p>{qualifications}</p>
        <h3>Main tasks:</h3>
        <p>{tasks}</p>
      </div>
      <div>
        <h3>Address:</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ProjectById;
