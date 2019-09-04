import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFilters } from '../redux/reducers/projects/actions';
import {
  Answers,
  Fieldset,
  FilterWrapper,
  QuestionTitle,
  SubmitButton,
} from '../styled-components';

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

  return (
    <FilterWrapper>
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
    </FilterWrapper>
  );
}

export default FilterForm;
