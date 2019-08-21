import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export default Text;
