import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';
import getAllProjects from '../redux/reducers/projects/selector'

export default function ProjectPage() {
  // Use the state and pass down the list
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  // On componentDidMount (useEffect), dispatch action to get the list
  useEffect(() => {
    // const userLocation = window.localStorage.getItem('loc');
    const mockLoc = {
      latitude: 41.390205,
      longitude: 2.154007,
    };

    // replace mock data with this 2 const
    // const geolocLat = navigator.geolocation.watchPosition((position) => {
    //   console.log(position.coords.latitude, position.coords.longitude);
    //   return position.coords.latitude;
    // });

    dispatch(getProjects(mockLoc.latitude, mockLoc.longitude));
  }, [dispatch]);

  return (
    <div>
      <p>Hi I am the project page.</p>
      <ProjectList projects={projects} />
    </div>
  );
}
