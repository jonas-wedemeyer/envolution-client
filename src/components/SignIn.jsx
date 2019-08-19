import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { signIn } from '../redux/reducers/authentication/actions';
import { FlexWrapper, Input, Button } from '../styled-components';

const FlexColWrap = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function SignIn() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(signIn(email, password));
    // act upon store update for authorization
    // OR fetch from local storage
  };

  return (
    <FlexWrapper style={{ justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <FlexColWrap>
          <Input
            required
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <Input
            required
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <Button type='submit'>Sign in</Button>
        </FlexColWrap>
      </form>
    </FlexWrapper>
  );
}

const renderWithRouter = withRouter(SignIn);

export default renderWithRouter;
