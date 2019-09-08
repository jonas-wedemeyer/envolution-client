import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signUp } from '../redux/reducers/authentication/actions';
import {
  FlexColWrap,
  FlexWrapper,
  FormInput,
  MockInput,
  Button,
} from '../styled-components';

function SignUp({ history }) {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    aboutMe: '',
    picture: '',
    pictureValue: 'Choose your profile picture',
  });
  const [signUpForm, setSignUpForm] = useState(true);

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    document.getElementById('next').reset();
    setSignUpForm(false);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const userInput = { ...profile };
    delete userInput.pictureValue;
    dispatch(signUp(userInput))
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
              onChange={handleChangeProfile}
            />
            <FormInput
              required
              autoComplete='off'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChangeProfile}
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
            <FormInput
              autoComplete='off'
              type='text'
              name='aboutMe'
              placeholder='Tell us a bit about yourself'
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
