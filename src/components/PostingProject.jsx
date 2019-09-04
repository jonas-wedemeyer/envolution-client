import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { postProject } from '../redux/reducers/projects/actions';

import back from '../assets/icons/back-thick.svg';
import {
  AppWrapper,
  ColumnWrapper,
  FlexWrapper,
  InButton,
  FormInput,
  PostFormInput,
  RadioIcon,
  Text,
  TextTitle,
  TopPage,
} from '../styled-components';

const FlexColWrapper = styled(ColumnWrapper)`
  margin-top: 60px;
`;

const FormText = styled(Text)`
  margin: 20px 0 10px 0;
  transform-origin: 0 0;
  transition: all 0.2s ease;
  font-weight: 500;
  color: darkgray;
`;

const FormTextTitle = styled(TextTitle)`
  margin: 30px 0;
  font-size: 24px;
`;

const InButtonCenter = styled(InButton)`
  display: flex;
  align-items: center;
  padding-left: 7vw;
`;

function PostingProject() {
  const [radioOptions, setRadios] = useState({
    isOrg: null,
    isQual: null,
    availability: null,
  });
  const [category, setCategory] = useState({
    category: null,
  });
  const [values, setValues] = useState({
    organizationName: '',
    projectName: '',
    date: null,
    time: '',
    description: '',
    role: '',
    qualifications: '',
    tasks: '',
    totalSpaces: '',
    address: '',
  });
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleRadios = (e) => {
    setRadios(e.target.value);
  };

  const handleCategory = (e) => {
    let count = 0;
    if (category !== null && count < 1) {
      setCategory(e.target.name);
      count += 1;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProject(values, radioOptions.availability, category));
  };

  const renderBtnText = () => {
    return isSelected ? 'Project was added' : 'Add your project';
  };

  const btnClick = () => {
    setSelection(!isSelected);
  };

  return (
    <AppWrapper>
      <TopPage>
        <Link to='/projects'>
          <img src={back} alt='back' height='30px' />
        </Link>
      </TopPage>
      <FlexColWrapper>
        <FormTextTitle>
          Add a project.
          <br />
          Start a movement.
        </FormTextTitle>
        <form onSubmit={handleSubmit}>
          <fieldset id='isOrg'>
            <FormText>
              Is this project affiliated with an organization?
            </FormText>
            <FormInput
              type='radio'
              name='notNGO'
              checked={radioOptions === 'notNGO'}
              value='notNGO'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;
            <FormInput
              type='radio'
              name='isNGO'
              checked={radioOptions === 'isNGO'}
              value='isNGO'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;&nbsp;
          </fieldset>
          <PostFormInput
            required
            type='text'
            name='organizationName'
            placeholder='Name the organization.'
            onChange={handleChange}
          />
          <PostFormInput
            required
            type='text'
            name='projectName'
            placeholder='Name the project.'
            onChange={handleChange}
          />
          <FormText>When is it?</FormText>
          <PostFormInput
            type='datetime-local'
            name='projectDate'
            onChange={handleChange}
          />
          <PostFormInput
            type='text'
            name='time'
            placeholder='Duration of project.'
            onChange={handleChange}
          />
          <fieldset id='availability'>
            <FormText>What is the duration of the project?</FormText>
            <FormInput
              type='radio'
              name='short'
              checked={radioOptions === 'short'}
              value='short'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;Short-term&nbsp;&nbsp;&nbsp;&nbsp;
            <FormInput
              type='radio'
              name='long'
              checked={radioOptions === 'long'}
              value='long'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;Long-term&nbsp;&nbsp;&nbsp;&nbsp;
          </fieldset>
          <PostFormInput
            required
            type='text'
            name='description'
            placeholder='Give a description of the project.'
            onChange={handleChange}
          />
          <fieldset id='category'>
            <FormText>Pick the environmental focus.</FormText>
            <FlexWrapper>
              <RadioIcon
                type='radio'
                name='Ocean'
                src='/assets/icons/Ocean.png'
                onClick={handleCategory}
              />
              <RadioIcon
                type='radio'
                name='Land'
                src='/assets/icons/Land.png'
                onClick={handleCategory}
              />
              <RadioIcon
                type='radio'
                name='Air'
                src='/assets/icons/Air.png'
                onClick={handleCategory}
              />
              <RadioIcon
                type='radio'
                name='Wildlife'
                src='/assets/icons/Wildlife.png'
                onClick={handleCategory}
              />
              <RadioIcon
                type='radio'
                name='Forest'
                src='/assets/icons/Forest.png'
                onClick={handleCategory}
              />
            </FlexWrapper>
          </fieldset>
          <PostFormInput
            required
            type='text'
            name='role'
            placeholder='What is the volunteer role title?'
            onChange={handleChange}
          />
          <fieldset id='isOrg'>
            <FormText>Does this role require specific qualifications?</FormText>
            <FormInput
              type='radio'
              name='noReq'
              checked={radioOptions === 'noReq'}
              value='noReq'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;&nbsp;
            <FormInput
              type='radio'
              name='isReq'
              checked={radioOptions === 'isReq'}
              value='isReq'
              onChange={handleRadios}
            />
            &nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;&nbsp;
          </fieldset>
          <PostFormInput
            required
            type='text'
            name='qualifications'
            placeholder='What are the role qualifications?'
            onChange={handleChange}
          />
          <PostFormInput
            required
            type='textarea'
            name='tasks'
            placeholder='What are the top 3 tasks?'
            onChange={handleChange}
          />
          <PostFormInput
            type='number'
            name='totalSpaces'
            placeholder='How many volunteers are needed?'
            min='1'
            max='100'
            onChange={handleChange}
          />
          <PostFormInput
            type='text'
            name='totalSpaces'
            placeholder='What is the address?'
            onChange={handleChange}
          />
          <InButtonCenter
            type='submit'
            onClick={btnClick}
            isSelected={!isSelected}>
            {renderBtnText()}
          </InButtonCenter>
        </form>
      </FlexColWrapper>
    </AppWrapper>
  );
}

export default connect()(PostingProject);
