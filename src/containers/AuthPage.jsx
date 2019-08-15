import React, { useState } from 'react';
import { SignIn, SignUp } from '../components';

export default function AuthPage() {
  const [signIn, setSignIn] = useState(true);

  const handleClick = () => {
    setSignIn((prev) => !prev);
  };

  let form;
  if (signIn) form = <SignIn setSignIn={setSignIn} />;
  else form = <SignUp setSignIn={setSignIn} />;

  return (
    <div>
      {form}
      <button type='button' onClick={handleClick}>
        {signIn ? 'Sign up' : 'Sign in'}
      </button>
    </div>
  );
}
