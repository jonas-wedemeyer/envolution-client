import styled from 'styled-components';

const TextTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export default TextTitle;
