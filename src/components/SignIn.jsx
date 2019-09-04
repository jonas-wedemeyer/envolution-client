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

const FormInput = styled(Input)`
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.secondary};
  transition: all 0.15s ease;

  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
`;

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
