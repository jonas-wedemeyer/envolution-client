import React, { useEffect } from 'react';
// import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import Geocode from 'react-geocode';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';
import { getAllProjects } from '../redux/reducers/projects/selector';

// const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
// Geocode.setApiKey(googleKey);

export default function ProjectPage() {
  // Use the state and pass down the list
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  // const [city, setCity] = useState();

  // On componentDidMount (useEffect), dispatch action to get the list
  useEffect(() => {
    // user geolocation
    const geolocation = navigator.geolocation.watchPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude); // eslint-disable-line no-console

      //   Geocode.fromLatLng(
      //     position.coords.latitude,
      //     position.coords.longitude,
      //   ).then(
      //     (res) => {
      //       const newCity = res.results[9].formatted_address;
      //       console.log(city); // eslint-disable-line no-console
      //       setCity({ city: newCity });
      //     },
      //     (error) => {
      //       console.error(error); // eslint-disable-line no-console
      //     },
      //   );
    });

    // to update dispatch(getProjects(city));
    dispatch(getProjects(geolocation.latitude, geolocation.longitude));
  }, [dispatch]);

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
