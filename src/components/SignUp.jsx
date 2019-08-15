import React from 'react';
import { withRouter } from 'react-router-dom';

function SignUp({ history }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/projects');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email
          <input
            required
            type='email'
            name='email'
            placeholder='john.snow@winterfell.com'
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            required
            type='password'
            name='password'
            placeholder='**********'
          />
        </label>
        <button type='submit'>Sign up</button>
      </form>
      <p>Already have an account?</p>
    </div>
  );
}

const renderWithRouter = withRouter(SignUp);

export default renderWithRouter;
