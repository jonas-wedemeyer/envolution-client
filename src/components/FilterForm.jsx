import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFilters } from '../redux/reducers/projects/actions';
import Button from './Button';

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
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset id='availability'>
          <h3>Availability</h3>
          <label htmlFor='availability'>
            <input
              type='radio'
              name='short'
              checked={availability === 'short'}
              value='short'
              onChange={handleChangeAvailability}
            />
            Short Term
          </label>
          <label htmlFor='availability'>
            <input
              type='radio'
              name='long'
              checked={availability === 'long'}
              value='long'
              onChange={handleChangeAvailability}
            />
            Long Term
          </label>
        </fieldset>
        <fieldset id='category'>
          <h3>Categories</h3>
          <label htmlFor='ocean'>
            <input
              type='checkbox'
              name='Ocean'
              onChange={handleChangeCategory}
            />
            Ocean Preservation
          </label>
          <label htmlFor='land'>
            <input
              type='checkbox'
              name='Land'
              onChange={handleChangeCategory}
            />
            Land Preservation
          </label>
          <label htmlFor='air'>
            <input type='checkbox' name='Air' onChange={handleChangeCategory} />
            Air Preservation
          </label>
          <label htmlFor='wildlife'>
            <input
              type='checkbox'
              name='Wildlife'
              onChange={handleChangeCategory}
            />
            Wildlife Preservation
          </label>
          <label htmlFor='forest'>
            <input
              type='checkbox'
              name='Forest'
              onChange={handleChangeCategory}
            />
            Forest Preservation
          </label>
        </fieldset>
        <Button isHidden={!isHidden} onClick={toggleComponent} />
      </form>
    </div>
  );
}

export default FilterForm;
