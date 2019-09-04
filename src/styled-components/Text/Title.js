import styled from 'styled-components';
import Text from './Text';

// h1 Title black
const Title = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  /* text-shadow: 0.5px 0.5px ${(props) => props.theme.color.secondary}90; */
`;

// h1 Title black
const MainTitleBlack = styled(Title)`
  color: ${(props) => props.theme.color.primary};
  padding: 4vh 1vw 1vh 7vw;
`;

// h1 Title white
const MainTitleWhite = styled(Title)`
  padding: 2vh 1vh 2vh 2vh;
  color: #fff;
`;

// h1 Title white - ok
const TitleOrg = styled(MainTitleWhite)`
  width: 90%;
  margin-bottom: 10vh;
`;

// h3 Subtitle black
const SubText = styled(MainTitleBlack)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding: 0;
`;

// h3 Subtitle white
const CardTitle = styled(MainTitleWhite)`
  padding: 5vh 1vh 0vh 1vh;
  font-size: 22px;
`;

// h3 Subtitle white
const CardSubtitle = styled.h3`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding: 0.5vh 0vw 0.5vh 2vw;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

// p User description black
const TextAboutMe = styled(Text)`
  margin: 0 26px;
  padding-bottom: 12px;
  /* font-size: 12px;
  text-align: left; */
`;

// Cards
const TitleUpCase = styled(Title)`
  text-transform: uppercase;
  font-size: 36px;
  text-shadow: 1px 1px #21212180;
`;

const TextRevert = styled(Text)`
  font-size: 18px;
  color: #fafafa;
  margin-bottom: 10px;
  text-align: center;
`;

export {
  CardTitle,
  CardSubtitle,
  MainTitleBlack,
  MainTitleWhite,
  SubText,
  TextAboutMe,
  TextRevert,
  Title,
  TitleOrg,
  TitleUpCase,
};
