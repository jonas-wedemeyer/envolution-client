import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setFilters } from '../redux/reducers/projects/actions';
import { SecondaryButton } from '../styled-components';

// styled-components
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vh;
  width: 88%;
  position: relative;
  border: solid 0.5px black;
  border-radius: 15px;
  margin: auto;
`;

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 0vw 2vh 2vw;
  width: 100%;
  position: relative;
`;

const QuestionTitle = styled.h3`
  display: flex;
  padding: 2vh 1vw 1vh 1vw;
  font-size: 26px;
  font-weight: 700;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vh;
  width: 60%;
  position: relative;
`;

// to continue
// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

// const Icon = styled.svg`
//   fill: none;
//   stroke: white;
//   stroke-width: 2px;
// `;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
//   border-radius: 3px;
//   transition: all 150ms;
//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }
//   ${Icon} {
//     visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
//   }
// `;

// const CheckboxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;

const SubmitButton = styled(SecondaryButton)`
  display: flex;
  margin: 2% auto;
  width: 60vw;
  justify-self: center;
  justify-content: center;
`;

function FilterForm() {
  const [availability, setAvailability] = useState(null);
  const [category, setCategory] = useState({});
  const [isHidden, setVisibility] = useState(true);
  const dispatch = useDispatch();

  const toggleComponent = () => {
    setVisibility(!isHidden);
  };

  const handleChangeAvailability = (e) => {
    // update local state
    setAvailability(e.target.value);
  };

  const handleChangeCategory = (e) => {
    // update local state
    setCategory({
      ...category,
      [e.target.name]: e.target.checked || undefined,
    });
  };

  const handleSubmit = (e) => {
    // dispatch action to update global state
    e.preventDefault();
    dispatch(setFilters(availability, category));
  };

  // const Checkbox = ({ className, checked, ...props }) => (
  //   <CheckboxContainer className={className}>
  //     <HiddenCheckbox checked={checked} {...props} />
  //     <StyledCheckbox checked={checked} />
  //     <Icon viewBox='0 0 24 24'>
  //       <polyline points='20 6 9 17 4 12' />
  //     </Icon>
  //   </CheckboxContainer>
  // );

  return (
    <ColumnWrapper>
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <fieldset id='availability'>
            <QuestionTitle>Availability</QuestionTitle>
            <label htmlFor='availability'>
              <input
                type='radio'
                name='short'
                checked={availability === 'short'}
                value='short'
                onChange={handleChangeAvailability}
              />
              &nbsp;&nbsp;Short Term&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label htmlFor='availability'>
              <input
                type='radio'
                name='long'
                checked={availability === 'long'}
                value='long'
                onChange={handleChangeAvailability}
              />
              &nbsp;&nbsp;Long Term
            </label>
          </fieldset>
        </Fieldset>
        <Fieldset>
          <fieldset id='category'>
            <QuestionTitle>Categories</QuestionTitle>
            <Answers>
              <label htmlFor='ocean'>
                <input
                  type='checkbox'
                  name='Ocean'
                  onChange={handleChangeCategory}
                />
                &nbsp;Ocean Preservation
              </label>
              <label htmlFor='land'>
                <input
                  type='checkbox'
                  name='Land'
                  onChange={handleChangeCategory}
                />
                &nbsp;Land Preservation
              </label>
              <label htmlFor='air'>
                <input
                  type='checkbox'
                  name='Air'
                  onChange={handleChangeCategory}
                />
                &nbsp;Air Preservation
              </label>
              <label htmlFor='wildlife'>
                <input
                  type='checkbox'
                  name='Wildlife'
                  onChange={handleChangeCategory}
                />
                &nbsp;Wildlife Preservation
              </label>
              <label htmlFor='forest'>
                <input
                  type='checkbox'
                  name='Forest'
                  onChange={handleChangeCategory}
                />
                &nbsp;Forest Preservation
              </label>
            </Answers>
          </fieldset>
        </Fieldset>
        <SubmitButton isHidden={!isHidden} onClick={toggleComponent}>
          Submit
        </SubmitButton>
      </form>
    </ColumnWrapper>
  );
}

export default FilterForm;
