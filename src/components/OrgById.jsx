import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Button from './Button';

export default function OrgById(props) {
  const { picture, name, mission, projects } = props.selectedOrg; // eslint-disable-line

  // map projects:
  function showOrgProjects() {
    if (projects) {
      const showProjects = projects.map((project) => (
        <li key={project.project_id}>
          {project.project_name}
          on
          <Moment format='MMM Do'>{project.project_date}</Moment>
        </li>
      ));
      return <ul>{showProjects}</ul>;
    }
    return null;
  }

  // NGo picture:
  function showOrgPicture() {
    if (picture) {
      return <img src={picture} alt='NGO pic' height='100px' />;
    }
    return 'no image for this NGO';
  }

  return (
    <div>
      <div>{showOrgPicture()}</div>
      <h2>{name}</h2>
      <div>
        <h2>About us:</h2>
        <p>{mission}</p>
      </div>
      <div>
        <h2>Upcoming projects:</h2>
        {showOrgProjects()}
      </div>
      <div>
        <ul>
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
