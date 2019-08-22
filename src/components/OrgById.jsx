import React from 'react';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import styled from 'styled-components';

// styled-components:
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  position: relative;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  width: 8%;
  position: fixed;
  top: 0;
  z-index: 3;
  margin: 2.5vh 1.5vw 0 0;
`;

const BgTopImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${(props) => props.image});
  height: 80vh;
  width: 110%;
  background-size: cover;
`;

const Title = styled.h1`
  display: flex;
  padding: 2vh 1vh 2vh 2vh;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  width: 90%;
  margin-bottom: 10vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
  position: relative;
  top: -5vh;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  height: 50vh;
  flex-flow: column wrap;
  padding: 2vh 2vh 2vh 2vh;
  font-size: 14px;
  justify-content: space-between;
  justify-content: flex-start;
`;

const DescriptionTitle = styled.h3`
  display: flex;
  padding: 2vh 1vw 1vh 2vw;
  font-size: 24px;
  font-weight: 700;
`;

export default function OrgById(props) {
  const { picture, name, mission, projects } = props.selectedOrg; // eslint-disable-line

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
      <TopPage>
        <Link to='/projects/d4ad1c26-453f-416b-a0c0-2640be6d29c2'>
          <img src='/assets/icons/icon_back.svg' alt='back' height='30px' />
        </Link>
      </TopPage>
      <BgTopImage image={picture}>
        <Title>{name}</Title>
      </BgTopImage>
      <InfoContainer>
        <Details>
          <DescriptionTitle>About us:</DescriptionTitle>
          <p>{mission}</p>
          {/* <div>
          <h2>Upcoming projects:</h2>
          {showOrgProjects()}
        </div> */}
        </Details>
      </InfoContainer>
    </ColumnWrapper>
  );
}
