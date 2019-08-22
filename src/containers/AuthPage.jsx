import React, { useState } from 'react';
import styled from 'styled-components';

import { SignIn, SignUp } from '../components';
import ForestImg from '../assets/Categories/home.jpeg';

// TODO: Outsource styled components to centralised folder
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
  justify-content: center;
  background-image: url(${(props) => props.image});
  height: 100vh;
  background-size: cover;
`;

const TransparentBg = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff60;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 10px;
  padding: 10px;
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
    <BgImage image={ForestImg}>
      <TransparentBg>
        <h2>Envolution</h2>
        {form}
        {subLine}
      </TransparentBg>
    </BgImage>
  );
}
