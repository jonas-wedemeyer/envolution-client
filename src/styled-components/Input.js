import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  name: props.name,
}))`
  outline: none;
  border: 2px solid #000a12;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  max-width: 300px;
  height: 30px;
  margin-top: 10px;
`;

export default Input;
