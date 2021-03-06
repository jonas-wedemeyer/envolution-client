import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signUp, updateUser } from '../redux/reducers/authentication/actions';
import {
  FlexColWrap,
  FlexWrapper,
  FormInput,
  MockInput,
  Button,
} from '../styled-components';

function SignUp({ history }) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    picture: '',
    pictureValue: 'Choose your profile picture',
  });
  const [signUpForm, setSignUpForm] = useState(true);
  const dispatch = useDispatch();

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(signUp(email, password));
    document.getElementById('next').reset();
    setSignUpForm(false);
  };

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const { firstName, lastName, picture } = profile;
    dispatch(updateUser({ firstName, lastName, picture }))
      .then(() => history.push('/onboarding'))
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  };

  const cloudinaryWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
      uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      sources: ['local', 'camera'],
    },
    (error, result) => {
      if (result && result.event === 'success') {
        const imageInfo = {
          picture: result.info.secure_url,
          pictureValue: result.info.original_filename,
        };
        setProfile({ ...profile, ...imageInfo });
        cloudinaryWidget.close();
      } else if (error)
        console.log('There has been an issue while uploading the image', error); // eslint-disable-line no-console
    },
  );

  const openWidget = (widget) => {
    widget.open();
  };

  return (
    <FlexWrapper style={{ justifyContent: 'center' }}>
      {signUpForm ? (
        <form id='next' onSubmit={handleSubmitSignUp}>
          <FlexColWrap>
            <div style={{ height: '58px' }} />
            <FormInput
              required
              autoComplete='off'
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChangeSignUp}
            />
            <FormInput
              required
              autoComplete='off'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChangeSignUp}
            />
            <Button style={{ marginTop: '25px' }} type='submit'>
              Sign up
            </Button>
          </FlexColWrap>
        </form>
      ) : (
        <form onSubmit={handleSubmitProfile}>
          <FlexColWrap>
            <FormInput
              required
              autoComplete='off'
              type='text'
              name='firstName'
              placeholder='First Name'
              onChange={handleChangeProfile}
            />
            <FormInput
              required
              autoComplete='off'
              type='text'
              name='lastName'
              placeholder='Last Name'
              onChange={handleChangeProfile}
            />
            <MockInput
              type='button'
              value='Choose File'
              onClick={() => openWidget(cloudinaryWidget)}
            >
              {profile.pictureValue}
            </MockInput>
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
