import React, { useState } from 'react';
import styled from 'styled-components';

import { SignIn, SignUp } from '../components';
import HomeImg from '../assets/Categories/home.jpeg';
import logo from '../assets/Logo/logo-final.png';

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: underline;
  cursor: pointer;
`;

const BgImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${(props) => props.image});
  height: 100vh;
  background-size: cover;
  color: ${(props) => props.theme.color.secondary};
`;

const TransparentBg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 10px;
  padding: 10px;
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
`;

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
