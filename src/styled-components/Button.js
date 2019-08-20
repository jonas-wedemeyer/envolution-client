import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.color.secondary};
  background: ${(props) => props.theme.color.primary};
  border: 2px solid ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-transform: uppercase;
  border-radius: 10px;
  height: 45px;
  min-width: 250px;
  margin: 10px;

  &:active {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
  }
`;

const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.secondary};
  border: 2px solid ${(props) => props.theme.color.primary};

  &:active {
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

const GreenButton = styled(Button)`
  color: ${(props) => props.theme.color.secondary};
  background: ${(props) => props.theme.color.green};
  border: 2px solid ${(props) => props.theme.color.green};

  &:active {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.green};
  }
`;

export { Button, SecondaryButton, GreenButton };
