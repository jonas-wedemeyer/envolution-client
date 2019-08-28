import styled, { keyframes } from 'styled-components';


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 6px solid grey;
  border-right: 6px solid grey;
  border-bottom: 6px solid grey;
  border-left: 6px solid black;
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export default LoadingSpinner;
