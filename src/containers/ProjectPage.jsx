import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';
import { getAllProjects } from '../redux/reducers/projects/selector';

export default function ProjectPage() {
  // Use the state and pass down the list
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  // On componentDidMount (useEffect), dispatch action to get the list
  useEffect(() => {
    // user geolocation
    const geolocation = navigator.geolocation.watchPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude); // eslint-disable-line no-console
      // return {latitude: position.coords.latitude, longitude: position.coords.longitude};
    });

    // later: handle async to get the "locality" from:
    //   const googleKey = process.env.GOOGLE_API_KEY;
    //   const google = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${geolocation.latitude},${geolocation.longitude}&key=${googleKey}`
    //   console.log('google link is:', google); // eslint-disable-line no-console

    dispatch(getProjects(geolocation.latitude, geolocation.longitude));
  }, [dispatch]);

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
