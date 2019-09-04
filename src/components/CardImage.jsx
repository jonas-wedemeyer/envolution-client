import React from 'react';
import styled from 'styled-components';

import { Image, Text, Title } from '../styled-components';

const TitleUpCase = styled(Title)`
  text-transform: uppercase;
  font-size: 36px;
  text-shadow: 1px 1px #21212180;
`;

const TextRevert = styled(Text)`
  font-size: 18px;
  color: #fafafa;
  margin-bottom: 10px;
  text-align: center;
`;

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

export default function CardImage({ image, category, name }) {
  return (
    <>
      <Image image={image} category={category}>
        <TitleUpCase>{category}</TitleUpCase>
        {name && (
          <Background direction='column' justify='center' align='center'>
            <TextRevert>
              Hi, &nbsp;
              <strong>{name}</strong>
              !&nbsp;
            </TextRevert>
            <TextRevert>Tell us your environmental goals.</TextRevert>
            <TextRevert>
              Swipe&nbsp;
              <strong>RIGHT</strong>
              &nbsp;to add a goal and&nbsp;
              <strong>LEFT</strong>
              &nbsp;to drop it.
            </TextRevert>
          </Background>
        )}
      </Image>
    </>
  );
}
