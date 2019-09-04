import React, { useState } from 'react';

import { SignIn, SignUp } from '../components';
import { BgImage, LinkDiv, Logo, TransparentBg } from '../styled-components';
import HomeImg from '../assets/Categories/home.jpeg';
import logo from '../assets/Logo/logo-final.png';

export default function AuthPage() {
  const [signIn, setSignIn] = useState(true);

  const handleClick = () => {
    setSignIn((prev) => !prev);
  };

  let form;
  let subLine;
  if (signIn) {
    form = <SignIn setSignIn={setSignIn} />;
    subLine = (
      <div>
        <p>Don&#39;t have an account yet?</p>
        <LinkDiv onClick={handleClick}> Sign Up</LinkDiv>
      </div>
    );
  } else {
    form = <SignUp setSignIn={setSignIn} />;
    subLine = (
      <div>
        <p>Already have an account?</p>
        <LinkDiv onClick={handleClick}> Sign In</LinkDiv>
      </div>
    );
  }

  return (
    <BgImage image={HomeImg}>
      <TransparentBg>
        <Logo src={logo} alt='logo' />
      </TransparentBg>
      <TransparentBg>
        {form}
        {subLine}
      </TransparentBg>
    </BgImage>
  );
}
