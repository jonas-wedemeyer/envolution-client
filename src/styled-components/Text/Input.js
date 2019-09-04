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

const FormInput = styled(Input)`
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.secondary};
  transition: all 0.15s ease;

  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
`;

const MockInput = styled.div`
  cursor: pointer;
  margin-top: 10px;
  outline: none;
  width: 92%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.secondary};
  transition: all 0.15s ease;

  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export { FormInput, Input, MockInput };
