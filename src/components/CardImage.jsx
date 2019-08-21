import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, Text, Title } from '../styled-components';

const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TitleUpCase = styled(Title)`
  text-transform: uppercase;
  font-size: 36px;
  text-shadow: 1px 1px #21212180;
`;

const TextRevert = styled(Text)`
  font-size: 18px;
  color: #fafafa;
  margin-bottom: 10px;
`;

// TODO: Refactor for using height with flexEnd
const Background = styled.div`
  background: rgba(0, 0, 0, 0.6);
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
          <Background direction='column' justify='flex-end'>
            <>
              <TextRevert>
                Hi,&nbsp;
                <strong>{name}</strong>
                !
              </TextRevert>
              <TextRevert>Tell us your environmental goals by swiping</TextRevert>
              <FlexWrapper justify='center' align='center'>
                <img
                  src='/assets/icons/arrow-left.png'
                  alt='arrow'
                  style={{ height: '24px', paddingRight: '15px' }}
                />
                <TextRevert>
                or
                </TextRevert>
                <img
                  src='/assets/icons/arrow-right.png'
                  alt='arrow'
                  style={{ height: '24px', paddingLeft: '15px' }}
                />
              </FlexWrapper>
            </>
          </Background>
        )}
      </Image>
    </>
  );
}
