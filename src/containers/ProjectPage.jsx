import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';

export default function ProjectPage() {
  // Use the state and pass down the list
  const allProjects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();

  // On componentDidMount (useEffect), dispatch action to get the list
  useEffect(() => {
    // const userLocation = window.localStorage.getItem('loc');
    const mockLoc = {
      latitude: 41.390205,
      longitude: 2.154007,
    };

    dispatch(getProjects(mockLoc.latitude, mockLoc.longitude));
  }, [dispatch]);

  return (
    <div>
      <p>Hi I am the project page.</p>
      <ProjectList allProjects={allProjects} />
    </div>
  );
}
