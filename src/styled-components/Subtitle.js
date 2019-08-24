import styled from 'styled-components';

const Subtitle = styled.h2`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  text-shadow: 0.5px 0.5px ${(props) => props.theme.color.secondary}90;
`;

const CardSubtitle = styled.h3`
  padding: 0.5vh 0vw 0.5vh 2vw;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

const SubText = styled(CardSubtitle)`
  padding: 0;
`;

export { CardSubtitle, SubText, Subtitle };
