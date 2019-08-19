import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Button from './Button';

// Images exports, refactoring to do:
import Ocean from '../assets/Ocean.jpg';
import Land from '../assets/Land.jpg';
import Air from '../assets/Air.jpg';
import Forest from '../assets/Forest.jpg';
import Wildlife from '../assets/Wildlife.jpg';

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

  return (
    <div>
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
        <ul>
          <p>I AM IN button below:</p>
          <li>
            <Link to='/projects'>
              <Button />
            </Link>
          </li>
          <p>BACK button below:</p>
          <li>
            <Link to='/projects'>
              <Button />
            </Link>
          </li>
          <p>SEE MORE ON NGO button below:</p>
          <li>
            <Link to={`/orgs/${organizationId}`}>
              <Button />
            </Link>
          </li>
        </ul>
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
