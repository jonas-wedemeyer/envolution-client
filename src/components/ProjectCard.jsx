import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import styled from 'styled-components';

import {
  CardDate,
  CardSubtitle,
  CardTitle,
  ColumnWrapper,
  SmallTag,
  SmallBackgroundImage,
} from '../styled-components';
import clock from '../assets/icons/clock.png';
import plus from '../assets/icons/green-plus.png';

// Styled-components:
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

const SelectButton = styled.div`
  background: ${(props) => (props.select ? '#fff' : '#fff')};
  margin-left: 36vw;
  width: 40px;
  border-radius: 25px;
  display: flex;
  padding-top: 1.4vh;
  padding-left: 2.4vw;
`;

const ProjectCard = (props) => {
  const { name, id, organizationName, date, availability, picture } = props;

  return (
    <ColumnWrapper>
      <AllLink to={`/projects/${id}`}>
        <SmallBackgroundImage image={picture}>
          <SmallTag>
            {availability}
            <span>-term project&nbsp;&nbsp;</span>
          </SmallTag>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{organizationName}</CardSubtitle>
          <Line>
            <CardDate>
              <img src={clock} alt='back' height='20px' />
              <span>&nbsp;&nbsp;</span>
              <Moment format='MMM Do'>{date}</Moment>
              <span>&nbsp;at&nbsp;</span>
              <Moment format='h:mm'>{date}</Moment>
            </CardDate>
            <SelectButton select>
              <img src={plus} alt='back' height='20px' />
            </SelectButton>
          </Line>
        </SmallBackgroundImage>
      </AllLink>
    </ColumnWrapper>
  );
};

export default ProjectCard;
