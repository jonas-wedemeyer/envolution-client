import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { signUp } from '../redux/reducers/authentication/actions';
import { FlexWrapper, Input, Button } from '../styled-components';

const FlexColWrap = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

function SignUp({ history }) {
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
    dispatch(signUp(email, password));
    // TODO: Update to render on parent when authorisation is populated
    history.push('/onboarding');
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
          <Button type='submit'>Sign up</Button>
        </FlexColWrap>
      </form>
    </FlexWrapper>
  );
}

const renderWithRouter = withRouter(SignUp);

export default renderWithRouter;
