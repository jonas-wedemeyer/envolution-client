import React from 'react';

import {
  BackgroundCard,
  Image,
  TextRevert,
  TitleUpCase,
} from '../styled-components';

export default function CardImage({ image, category, name }) {
  return (
    <>
      <Image image={image} category={category}>
        <TitleUpCase>{category}</TitleUpCase>
        {name && (
          <BackgroundCard direction='column' justify='center' align='center'>
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
          </BackgroundCard>
        )}
      </Image>
    </>
  );
}
