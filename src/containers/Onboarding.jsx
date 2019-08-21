import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Swipeable from 'react-swipy';
import styled from 'styled-components';

import { InterestCard, CardImage } from '../components';
import { Button } from '../styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

export default function Onboarding({ history }) {
  const onClick = () => {
    history.push('/projects');
  };

  // TODO: Change to firstName
  const { email } = JSON.parse(
    useSelector((props) => props.authentication.currentUser),
  );

  const [cardDeck, setCardDeck] = useState([
    <CardImage
      image='../assets/Categories/Forest.jpg'
      category='forest'
      name={email}
    />,
    <CardImage image='../assets/Categories/Air.jpg' category='air' />,
    <CardImage image='../assets/Categories/Land.jpg' category='land' />,
    <CardImage image='../assets/Categories/ocean.jpg' category='ocean' />,
    <CardImage
      image='../assets/Categories/rainForest.jpg'
      category='rainForest'
    />,
    <CardImage
      image='../assets/Categories/Wildlife.jpg'
      category='wild-life'
    />,
    <Button onClick={onClick}>Check out the projects</Button>,
  ]);

  const [interest, setInterest] = useState([]);

  let index = 0;
  const onAfterSwipe = () => {
    setCardDeck(cardDeck.slice(1, cardDeck.length));
    index += 1;
  };

  const onSwipe = (dir) => {
    if (dir === 'right')
      setInterest([...interest, cardDeck[index].props.category]);
  };

  return (
    <Wrapper>
      <Swipeable onAfterSwipe={onAfterSwipe} onSwipe={onSwipe}>
        <InterestCard>{cardDeck[0]}</InterestCard>
      </Swipeable>
      {cardDeck.length > 1 && (
        <InterestCard zIndex={-1}>{cardDeck[1]}</InterestCard>
      )}
    </Wrapper>
  );
}
