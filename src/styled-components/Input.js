import styled from 'styled-components';

const Input = styled.input`
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 5px;
  padding: 5px;
  min-width: 250px;
  height: 45px;
  margin-top: 10px;
  outline: none;
`;

export default Input;
