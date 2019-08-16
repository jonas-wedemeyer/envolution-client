import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FlexWrapper, Input, Button } from '../styled-components';

const FlexColWrap = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function SignIn({ history }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/projects');
  };

  return (
    <FlexWrapper style={{ justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <FlexColWrap>
          <Input required type='email' name='email' placeholder='Email' />
          <Input
            required
            type='password'
            name='password'
            placeholder='Password'
          />
          <Button type='submit'>Sign in</Button>
        </FlexColWrap>
      </form>
    </FlexWrapper>
  );
}

const renderWithRouter = withRouter(SignIn);

export default renderWithRouter;
