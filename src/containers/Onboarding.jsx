import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swipeable from 'react-swipy';
import styled from 'styled-components';

import getUser from '../redux/reducers/authentication/selector';
import { updateUser } from '../redux/reducers/authentication/actions';
import { InterestCard, CardImage } from '../components';
import { Button, Text } from '../styled-components';
import HomeImg from '../assets/Categories/home.jpeg';

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
      image='../assets/Categories/forest.jpeg'
      category='forest'
      name={firstName}
    />,
    <CardImage image='../assets/Categories/air.jpeg' category='air' />,
    <CardImage image='../assets/Categories/land.jpeg' category='land' />,
    <CardImage image='../assets/Categories/ocean.jpeg' category='ocean' />,
    <CardImage
      image='../assets/Categories/wildlife.jpeg'
      category='wildlife'
    />,
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

  const BgImage = styled.div`
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.image});
    height: 100vh;
    background-size: cover;
    color: ${(props) => props.theme.color.secondary};
  `;

  // TODO: Refactor for using height with flexEnd
  const Background = styled.div`
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 50px;
    border-radius: 10px;
    width: 90%;
    padding: 10px;
  `;

  const TextRevert = styled(Text)`
    font-size: 18px;
    color: #fafafa;
    margin-bottom: 10px;
    text-align: center;
  `;

  return (
    <Wrapper>
      {cardDeck.length > 0 ? (
        <Swipeable onAfterSwipe={onAfterSwipe} onSwipe={onSwipe}>
          <InterestCard>{cardDeck[0]}</InterestCard>
        </Swipeable>
      ) : (
        <BgImage image={HomeImg}>
          <Background direction='column' justify='center' align='center'>
            <TextRevert>
              Awesome &nbsp;
              <strong>Jonas</strong>
              you completed Envolution&apos;s onboarding
            </TextRevert>
            <TextRevert>
              You are on your way to becoming an environmental hero!
            </TextRevert>
          </Background>
          <Button onClick={onClick}>See projects in your area</Button>
        </BgImage>
      )}
      {cardDeck.length > 1 && (
        <InterestCard zIndex={-1}>{cardDeck[1]}</InterestCard>
      )}
    </Wrapper>
  );
}
