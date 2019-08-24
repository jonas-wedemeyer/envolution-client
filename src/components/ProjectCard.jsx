import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styled from 'styled-components';

// Images exports, refactoring to do:
// import Ocean from '../assets/Categories/Ocean.jpg';
// import Land from '../assets/Categories/Land.jpg';
// import Air from '../assets/Categories/Air.jpg';
// import Forest from '../assets/Categories/Forest.jpg';
// import Wildlife from '../assets/Categories/Wildlife.jpg';

// Styled-components:
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  color: #fff;
`;

const AllLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-bottom: 2vh;
`;

const MiniatureImage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.4) 50%
    ),
    url(${(props) => props.image});
  height: 30vh;
  width: 85%;
  background-size: cover;
  border-radius: 15px;
`;

const Tag = styled.div`
  height: 24px;
  align-self: flex-start;
  color: #fff;
  background: rgba(255, 255, 255, 0.35);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  padding: 0.3vh 1vh;
  margin-top: 6vh;
`;

const Title = styled.h1`
  display: flex;
  padding: 5vh 1vh 0vh 1vh;
  font-size: 22px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  display: flex;
  padding: 0.5vh 0vw 0.5vh 2vw;
  font-weight: 600;
  width: 80%;
`;

const Date = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 0.7vh 0vw 0vh 2vw;
  height: 40px;
`;

const SelectButton = styled.div`
  background: ${(props) => (props.select ? '#fff' : '#fff')};
  margin-left: 38vw;
  width: 40px;
  border-radius: 25px;
  display: flex;
  padding-top: 1.4vh;
  padding-left: 2.4vw;
`;

const ProjectCard = (props) => {
  const {
    name,
    id,
    organizationName,
    date,
    availability,
    // category,
    picture,
  } = props;

  // render category pics --placeholders-- refactoring to do:
  // const renderImage = () => {
  //   if (category === 'Ocean') {
  //     return <img src={Ocean} alt='category' height='100px' />;
  //   }
  //   if (category === 'Land') {
  //     return <img src={Land} alt='category' height='100px' />;
  //   }
  //   if (category === 'Air') {
  //     return <img src={Air} alt='category' height='100px' />;
  //   }
  //   if (category === 'Forest') {
  //     return <img src={Forest} alt='category' height='100px' />;
  //   }
  //   if (category === 'Wildlife') {
  //     return <img src={Wildlife} alt='category' height='100px' />;
  //   }
  //   return <p>no picture for this category</p>;
  // };

  return (
    <ColumnWrapper>
      <AllLink to={`/projects/${id}`}>
        <MiniatureImage image={picture}>
          <Tag>
            {availability}
            <span>-term project&nbsp;&nbsp;</span>
          </Tag>
          <Title>{name}</Title>
          <SubTitle>{organizationName}</SubTitle>
          <Line>
            <Date>
              <img src='/assets/icons/clock.png' alt='back' height='20px' />
              <span>&nbsp;&nbsp;</span>
              <Moment format='MMM Do'>{date}</Moment>
              <span>&nbsp;at&nbsp;</span>
              <Moment format='h:mm'>{date}</Moment>
            </Date>
            {/* <div>{renderImage()}</div> */}
            <SelectButton select>
              <img
                src='/assets/icons/green-plus.png'
                alt='back'
                height='20px'
              />
            </SelectButton>
          </Line>
        </MiniatureImage>
      </AllLink>
    </ColumnWrapper>
  );
};

export default ProjectCard;
