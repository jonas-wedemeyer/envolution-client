import React from 'react';
import { withRouter } from 'react-router-dom';

function SignIn({ history }) {
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
        <button type='submit'>Sign in</button>
      </form>
      <p>Don&#39;t have an account yet?</p>
    </div>
  );
}

const renderWithRouter = withRouter(SignIn);

export default renderWithRouter;
