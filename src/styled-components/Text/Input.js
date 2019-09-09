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

const FormInput = styled.input`
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.color.secondary};
  background: none;
  border-radius: 0;
  color: ${(props) => props.theme.color.secondary};
  transition: all 0.15s ease;
  width: 250px;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
`;

const PostFormInput = styled(Input)`
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid darkgrey;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
`;

const MockInput = styled.div`
  cursor: pointer;

  outline: none;
  width: 250px;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 50px;
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

export { FormInput, Input, MockInput, PostFormInput };
