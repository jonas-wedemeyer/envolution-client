import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signIn } from '../redux/reducers/authentication/actions';
import {
  FlexColWrap,
  FlexWrapper,
  FormInput,
  Button,
} from '../styled-components';

function SignIn({ history }) {
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
    dispatch(signIn(email, password))
      .then(() => history.push('/projects'))
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  };

  return (
    <FlexWrapper style={{ justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <FlexColWrap>
          <div style={{ height: '58px' }} />
          <FormInput
            required
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <FormInput
            required
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
          <Button style={{ marginTop: '25px' }} type='submit'>
            Sign in
          </Button>
        </FlexColWrap>
      </form>
    </FlexWrapper>
  );
}

const renderWithRouter = withRouter(SignIn);

export default renderWithRouter;
