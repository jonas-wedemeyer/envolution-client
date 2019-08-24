import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.color.secondary};
  background: ${(props) => props.theme.color.primary};
  border: 2px solid ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  padding: 10px;
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

const InButton = styled(Button)`
  margin: 3.5% auto;
  width: 60vw;
  background: ${(props) =>
    props.isSelected ? props.theme.color.primary : props.theme.color.green};
  color: ${(props) =>
    props.isSelected ? props.theme.color.secondary : '#fff'};
  border: ${(props) =>
    props.isSelected ? '2px solid #000' : '2px solid #fff'};

  &:active {
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
  }
`;

const TransparentButton = styled(Button)`
  background: ${(props) =>
    props.ngo ? 'rgba(255, 255, 255, 0.45)' : 'rgba(255, 255, 255, 0.45)'};
  color: ${(props) => (props.ngo ? '#fff' : '#fff')};
  border: ${(props) => (props.ngo ? '0px' : '0px')};
  margin: 0 1vh 10vh 2vh;
  font-size: 12px;
  padding-left: 4vw;
  padding-bottom: 3.5vh;
  height: 30px;
  text-align: left;
  font-weight: 700;
`;

export { Button, GreenButton, InButton, SecondaryButton, TransparentButton };
