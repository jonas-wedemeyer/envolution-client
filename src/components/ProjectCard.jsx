import React from 'react';
import Moment from 'react-moment';

import {
  AllProjectCards,
  CardButton,
  CardDate,
  CardSubtitle,
  CardTitle,
  ColumnWrapper,
  Row,
  SmallTag,
  SmallBackgroundImage,
} from '../styled-components';
import clock from '../assets/icons/clock.png';
import plus from '../assets/icons/green-plus.png';

const ProjectCard = (props) => {
  const { name, id, organizationName, date, availability, picture } = props;

  return (
    <ColumnWrapper>
      <AllProjectCards to={`/projects/${id}`}>
        <SmallBackgroundImage image={picture}>
          <SmallTag>
            {availability}
            <span>-term project&nbsp;&nbsp;</span>
          </SmallTag>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{organizationName}</CardSubtitle>
          <Row>
            <CardDate>
              <img src={clock} alt='back' height='20px' />
              <span>&nbsp;&nbsp;</span>
              <Moment format='MMM Do'>{date}</Moment>
              <span>&nbsp;at&nbsp;</span>
              <Moment format='h:mm'>{date}</Moment>
            </CardDate>
            <CardButton select>
              <img src={plus} alt='back' height='20px' />
            </CardButton>
          </Row>
        </SmallBackgroundImage>
      </AllProjectCards>
    </ColumnWrapper>
  );
};

export default ProjectCard;
