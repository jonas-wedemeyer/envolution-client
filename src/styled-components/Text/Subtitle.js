import styled from 'styled-components';

const Subtitle = styled.h2`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  text-shadow: 0.5px 0.5px ${(props) => props.theme.color.secondary}90;
`;

export default Subtitle;
