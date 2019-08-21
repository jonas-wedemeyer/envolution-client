import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-shadow: 0.5px 0.5px ${(props) => props.theme.color.secondary}90;
`;

export default Title;
