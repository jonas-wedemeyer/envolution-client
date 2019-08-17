import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Geocode from 'react-geocode';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';
import { getAllProjects } from '../redux/reducers/projects/selector';
import FilterForm from '../components/FilterForm';

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
Geocode.setApiKey(googleKey);

export default function ProjectPage(props) {
  // Use the state and pass down the list
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  // On componentDidMount (useEffect), get the list:
  useEffect(() => {
    // user geolocation
    if (!props.match.params.cityName) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude); // eslint-disable-line no-console

        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude,
        ).then(
          (res) => {
            const newCity = res.results[0].address_components.filter(
              (ac) => ~ac.types.indexOf('locality'), // eslint-disable-line
            )[0].long_name; // eslint-disable-line
            console.log('newCity', newCity); // eslint-disable-line no-console
            dispatch(getProjects(newCity));
          },
          (error) => {
            console.error(error); // eslint-disable-line no-console
          },
        );
      });
    } else {
      dispatch(getProjects(props.match.params.cityName));
    }
  }, [dispatch, props.match.params.cityName]); // eslint-disable-line

  return (
    <div>
      <FilterForm />
      <ProjectList projects={projects} />
    </div>
  );
}
