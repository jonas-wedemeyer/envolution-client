import React, { useState } from 'react';

export default function FilterForm() {
  const [selectedOptionId, setRadioButton] = useState(''); // eslint-disable-line

  const handleChangeb = (e) => {
    console.log(e.target.value); // eslint-disable-line no-console
    setRadioButton({
      selectedOptionId: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <form>
        <fieldset id='availability'>
          <h3>Availability</h3>
          <label htmlFor='shortTerm'>
            <input
              type='radio'
              name='availability'
              value='shortTerm'
              onChange={handleChangeb}
            />
            Short Term
          </label>
          <label htmlFor='longTerm'>
            <input
              type='radio'
              name='availability'
              value='longTerm'
              onChange={handleChangeb}
            />
            Long Term
          </label>
        </fieldset>
        <fieldset id='category'>
          <h3>Categories</h3>
          <label htmlFor='ocean'>
            <input
              type='radio'
              name='category'
              value='ocean'
              onChange={handleChangeb}
            />
            Ocean Preservation
          </label>
          <label htmlFor='land'>
            <input
              type='radio'
              name='category'
              value='land'
              onChange={handleChangeb}
            />
            Land Preservation
          </label>
        </fieldset>
      </form>
    </div>
  );
}
