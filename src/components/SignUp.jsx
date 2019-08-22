import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

// import { signUp, updateUser } from '../redux/reducers/authentication/actions';
import { FlexWrapper, Input, Button } from '../styled-components';
// import { fetchState } from '../redux/persistState';

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
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.color.secondary};
  }
`;

const InputImage = styled(Input)`
  display: none;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background: none;
  border-radius: 0;
  color: #ffffff00;
  transition: all 0.15s ease;
  margin-top: 10px;
  outline: none;
`;

const MockInput = styled.div`
  cursor: pointer;
  margin-top: 10px;
  outline: none;
  width: 92%;
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
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.color.secondary};
  }
`;

function SignUp({ history }) {
  // const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    image: 'Choose a file',
  });
  const [signUpForm, setSignUpForm] = useState(true);

  const handleChangeFirst = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitFirst = (e) => {
    e.preventDefault();
    // const { email, password } = values;
    // dispatch(signUp(email, password));
    document.getElementById('next').reset();
    setSignUpForm(false);
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImage = (e) => {
    const image = e.target.files[0];
    setProfile({ ...profile, image: image.name });
  };

  const handleSubmitSecond = (e) => {
    e.preventDefault();
    history.push('/onboarding');
  };

  const mockFileInput = () => {
    const fileInput = document.getElementById('file');
    fileInput.click();
  };

  // // WIP | TODO: Refactoring week
  // const jwtToken = fetchState();
  // const { firstName, lastName, image } = profile;
  // dispatch(updateUser(firstName, lastName));
  // const picture = new FormData();
  // picture.append('profilePhoto', picture);
  // fetch('http://localhost:3003/myprofile', { //directly accessing the defined enpoint here instead of passing is as arg
  // 	method: 'POST',
  // 	headers: {
  //     'Authorization': `Bearer ${jwtToken.authentication.token}`
  // 	},
  // 	body: JSON.stringify({
  // 		picture,
  // 	})
  // })
  //   .then((res) => res.json())
  //   .then(imageRes => console.log(imageRes))
  //   .catch(err => console.log(err))
  // };

  return (
    <FlexWrapper style={{ justifyContent: 'center' }}>
      {signUpForm ? (
        <form id='next' onSubmit={handleSubmitFirst}>
          <FlexColWrap>
            <div style={{ height: '58px' }} />
            <FormInput
              // required
              autoComplete='off'
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChangeFirst}
            />
            <FormInput
              // required
              autoComplete='off'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChangeFirst}
            />
            <Button style={{ marginTop: '25px' }} type='submit'>
              Sign up
            </Button>
          </FlexColWrap>
        </form>
      ) : (
        <form onSubmit={handleSubmitSecond}>
          <FlexColWrap>
            <FormInput
              required
              autoComplete='off'
              type='text'
              name='firstName'
              placeholder='First Name'
              onChange={handleChangeText}
            />
            <FormInput
              required
              autoComplete='off'
              type='text'
              name='lastName'
              placeholder='Last Name'
              onChange={handleChangeText}
            />
            <MockInput
              type='button'
              value='Choose File'
              onClick={mockFileInput}
            >
              {profile.image}
            </MockInput>
            <InputImage
              id='file'
              type='file'
              name='picture'
              onChange={handleImage}
            />
            <Button style={{ marginTop: '25px' }} type='submit'>
              Submit Profile
            </Button>
          </FlexColWrap>
        </form>
      )}
    </FlexWrapper>
  );
}

const renderWithRouter = withRouter(SignUp);

export default renderWithRouter;
