import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swipeable from 'react-swipy';
import styled from 'styled-components';

import getUser from '../redux/reducers/authentication/selector';
import { updateUser } from '../redux/reducers/authentication/actions';
import { InterestCard, CardImage } from '../components';
import { Button, FlexWrapper } from '../styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Onboarding({ history }) {
  const { firstName } = useSelector(getUser);
  const dispatch = useDispatch();

  const [interest, setInterest] = useState([]);
  // TODO: Refactor to generate state dynamically based on categories
  const [cardDeck, setCardDeck] = useState([
    <CardImage
      image='../assets/Categories/Forest.jpg'
      category='forest'
      name={firstName}
    />,
    <CardImage image='../assets/Categories/Air.jpg' category='air' />,
    <CardImage image='../assets/Categories/Land.jpg' category='land' />,
    <CardImage image='../assets/Categories/ocean.jpg' category='ocean' />,
    <CardImage image='../assets/Categories/Wildlife.jpg' category='wildlife' />,
  ]);

  let index = 0;
  const onAfterSwipe = () => {
    setCardDeck(cardDeck.slice(1, cardDeck.length));
    index += 1;
  };

  const onSwipe = (dir) => {
    if (dir === 'right')
      setInterest([...interest, cardDeck[index].props.category]);
  };

  const onClick = () => {
    dispatch(updateUser({ interests: interest }));
    history.push('/projects');
  };

  return (
    <Wrapper>
      {cardDeck.length > 0 ? (
        <Swipeable onAfterSwipe={onAfterSwipe} onSwipe={onSwipe}>
          <InterestCard>{cardDeck[0]}</InterestCard>
        </Swipeable>
      ) : (
        <FlexWrapper
          justify='center'
          align='center'
          direction='column'
          height='inherit'
        >
          <Button onClick={onClick}>Take me to the Projects</Button>
        </FlexWrapper>
      )}
      {cardDeck.length > 1 && (
        <InterestCard zIndex={-1}>{cardDeck[1]}</InterestCard>
      )}
      )
    </Wrapper>
  );
}
