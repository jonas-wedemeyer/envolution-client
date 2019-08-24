import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import back from '../assets/icons/back-thick.svg';

import {
  Button,
  FlexWrapper,
  Icon,
  Input,
  Text,
  TextTitle,
} from '../styled-components';

const Page = styled(FlexWrapper)`
  background-color: #fafafa;
`;

const FlexColWrap = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-end;
`;

const FormBox = styled.form`
  margin-top: 60px;
`;

const IconBox = styled.div`
  display: flex;
`;

const Icons = styled.div`
  padding-top: 16px;
`;

const IndivIcon = styled(Icon)`
  height: 48px;
  width: 48px;
  padding: 4px;
`;

const FormInput = styled(Input)`
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.primary};
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
`;

const FormText = styled(Text)`
  margin: 20px 0 10px 0;
  transform-origin: 0 0;
  transition: all 0.2s ease;
  font-weight: 500;
`;

const BtmGreenBtn = styled(Button)`
  margin: 40px 0;
  background: ${(props) => (props.isSelected ? '#212121' : '#a5d6a7')};
  color: ${(props) => (props.isSelected ? '#fafafa' : '#fff')};
  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #a5d6a7'};
`;

const Border = styled.div`
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
`;

const FormTextTitle = styled(TextTitle)`
  margin: 30px 0;
  font-size: 24px;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 8%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 4vh 1.5vw 0 2vw;
`;

function PostingProject() {
  const [values, setValues] = useState({
    projectName: '',
    description: '',
    projectDate: null,
    timeframe: null,
    category: null,
    amount: '',
    fromOrganization: null,
  });

  const [isSelected, setSelection] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const {
  //     projectName,
  //     description,
  //     projectDate,
  //     timeframe,
  //     category,
  //     amount,
  //     fromOrganization,
  //   } = values;
  //   dispatch(
  //     postProject(
  //       projectName,
  //       description,
  //       projectDate,
  //       timeframe,
  //       category,
  //       amount,
  //       fromOrganization,
  //     ),
  //   );
  // history.push('/projects');
  // };

  const renderBtnText = () => {
    return isSelected ? 'Project added!' : 'Add your project';
  };

  const btnClick = () => {
    setSelection(!isSelected);
  };

  return (
    <Page style={{ justifyContent: 'center' }}>
      <TopPage>
        <Link to='/projects'>
          <img src={back} alt='back' height='30px' />
        </Link>
      </TopPage>
      <FormBox>
        <FlexColWrap>
          <FormTextTitle>
            Add a project.
            <br />
            Start a movement.
          </FormTextTitle>
          <FormInput
            required
            type='text'
            name='projectName'
            placeholder='Name the project.'
            onChange={handleChange}
          />
          <Border />
          <FormInput
            required
            type='text'
            name='description'
            placeholder='What is it about?'
            onChange={handleChange}
          />
          <FormText>When is it?</FormText>
          <FormInput
            type='datetime-local'
            name='projectDate'
            onChange={handleChange}
          />
          <FormText>What is the environmental focus?</FormText>
          <IconBox>
            <Icons>
              <IndivIcon src='/assets/icons/Forest.png' height='4px' />
              <IndivIcon src='/assets/icons/Ocean.png' height='4px' />
              <IndivIcon src='/assets/icons/Land.png' height='4px' />
              <IndivIcon src='/assets/icons/Wildlife.png' height='4px' />
              <IndivIcon src='/assets/icons/Air.png' height='4px' />
            </Icons>
          </IconBox>
          <FormInput
            type='number'
            name='amount'
            placeholder='How many volunteers needed?'
            min='1'
            max='100'
            onChange={handleChange}
          />
          <BtmGreenBtn
            type='submit'
            onClick={btnClick}
            isSelected={!isSelected}>
            {renderBtnText()}
          </BtmGreenBtn>
        </FlexColWrap>
      </FormBox>
    </Page>
  );
}

export default connect()(PostingProject);
