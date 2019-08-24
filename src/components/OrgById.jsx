import React from 'react';

import {
  BackgroundImage,
  ColumnWrapper,
  Details,
  InfoContainer,
  OrgCategoryIcon,
  TitleOrg,
  TopPage,
} from '../styled-components';
import back from '../assets/icons/back-thick.svg';

export default function OrgById(props) {
  const { picture, name, mission, category, website } = props.selectedOrg; // eslint-disable-line

  // map projects:
  // function showOrgProjects() {
  //   if (projects) {
  //     const showProjects = projects.map((project) => (
  //       <li key={project.project_id}>
  //         {project.project_name}
  //         on
  //         <Moment format='MMM Do'>{project.project_date}</Moment>
  //       </li>
  //     ));
  //     return <ul>{showProjects}</ul>;
  //   }
  //   return null;
  // }

  return (
    <ColumnWrapper>
      <TopPage onClick={() => props.history.goBack()}>
        <img src={back} alt='back' height='30px' />
      </TopPage>
      <BackgroundImage image={picture}>
        <OrgCategoryIcon>
          <img
            src={`/assets/iconsWhite/${category}-picto-grey.png`}
            alt='categoryIcon'
            height='70px'
          />
        </OrgCategoryIcon>
        <TitleOrg>{name}</TitleOrg>
      </BackgroundImage>
      <InfoContainer>
        <Details>
          <h3>About us</h3>
          <p>{mission}</p>
          <h3>Our website</h3>
          <p>{website}</p>
        </Details>
      </InfoContainer>
    </ColumnWrapper>
  );
}
