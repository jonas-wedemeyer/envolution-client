import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Button from './Button';

// Images exports, refactoring to do:
import Ocean from '../assets/Categories/Ocean.jpg';
import Land from '../assets/Categories/Land.jpg';
import Air from '../assets/Categories/Air.jpg';
import Forest from '../assets/Categories/Forest.jpg';
import Wildlife from '../assets/Categories/Wildlife.jpg';

const ProjectCard = ({ id, organization, date, shortTerm, category }) => {
  // render category pics --placeholders-- refactoring to do:
  const renderImage = () => {
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

  return (
    <div>
      <div>{shortTerm ? <h3>Short Term</h3> : <h3>Long Term</h3>}</div>
      {/* <h1>{console.log(name)}</h1> */}
      <h2>{organization}</h2>
      <h2>{category}</h2>
      <Moment format='MMM Do'>{date}</Moment>
      <p>at</p>
      <Moment format='h:mm'>{date}</Moment>
      <div>{renderImage()}</div>
      <div>
        <ul>
          <li>
            <Link to={`/projects/${id}`}>
              <Button />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
