import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Geocode from 'react-geocode';

import { getProjects } from '../redux/reducers/projects/actions';
import { getAllProjects } from '../redux/reducers/projects/selector';
import { FilterForm, ProjectList } from '../components';
import { Background, FilterIcon, MainTitleBlack } from '../styled-components';
import filter from '../assets/icons/filter-thick-black.png';

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
Geocode.setApiKey(googleKey);

export default function ProjectPage(props) {
  // Use the state and pass down the list
  const filters = useSelector((state) => state.projects.filters);
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  function filteredProjects() {
    const categories = Object.keys(filters.category).filter(
      (cat) => filters.category[cat],
    );

    return projects.filter((project) => {
      let categoryCheck = true;
      if (categories.length)
        categoryCheck = categories.includes(project.category);
      let availabilityCheck = true;
      if (filters.availability)
        availabilityCheck = project.availability === filters.availability;
      return categoryCheck && availabilityCheck;
    });
  }

  // On componentDidMount (useEffect), get the list:
  useEffect(() => {
    // user geolocation
    if (!props.match.params.cityName) {
      navigator.geolocation.getCurrentPosition((position) => {
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude,
        ).then(
          (res) => {
            const newCity = res.results[0].address_components.filter(
              (ac) => ~ac.types.indexOf('locality'), // eslint-disable-line
            )[0].long_name; // eslint-disable-line
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

  // If empty list of projects :
  const renderEmptyList = () => {
    if (projects.length === 0) {
      return (
        <h4 style={{ textAlign: 'center' }}>
          There are no projects in your area yet.
        </h4>
      );
    }
    return null;
  };

  // Search Toggle :
  const [isHidden, setVisibility] = useState(true);

  const toggleComponent = () => {
    setVisibility(!isHidden);
  };

  return (
    <Background>
      <FilterIcon type='button' onClick={toggleComponent}>
        <img src={filter} alt='filter' height='40px' />
      </FilterIcon>
      {!isHidden && (
        <FilterForm isHidden={!isHidden} toggleComponent={toggleComponent} />
      )}
      <MainTitleBlack>What&apos;s up around you</MainTitleBlack>
      <ProjectList projects={filteredProjects()} />
      {renderEmptyList()}
    </Background>
  );
}
