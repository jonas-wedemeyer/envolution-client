import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  color: #fff;
  background: #212121;
  outline: none;
  border: 2px solid #212121;
  border-radius: 10px;
  height: 45px;
  max-width: 200px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;

  &:active {
    background: #fff;
    color: #212121;
  }
`;

export default Button;
