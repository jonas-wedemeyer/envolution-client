import React from 'react';
import styled from 'styled-components';

import {
  Button,
  FlexWrapper,
  Input,
  Icon,
  ListImage,
  ListFlag,
  LoadingSpinner,
} from '.';

const FlexWrapperCol = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: center;
`;

export default function ComponentsList() {
  return (
    <div>
      <h1>Styled Components Overview</h1>
      <FlexWrapperCol>
        <Button>I am A Button</Button>
        <Input
          type='email'
          name='email'
          placeholder='I am the placeholder text'
        />
        <Icon src='/assets/icons/tree.png' alt='tree' />
        <ListImage image='https://images.unsplash.com/photo-1456693906521-44e96e49e85f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'>
          <ListFlag>Long Term</ListFlag>
        </ListImage>
        <LoadingSpinner />
      </FlexWrapperCol>
    </div>
  );
}
