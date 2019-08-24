import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.color.secondary};
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-shadow: 0.5px 0.5px ${(props) => props.theme.color.secondary}90;
`;

const TitleByID = styled(Title)`
  padding: 2vh 1vh 2vh 2vh;
  color: #fff;
  font-size: 26px;
`;

const CardTitle = styled(TitleByID)`
  padding: 5vh 1vh 0vh 1vh;
  font-size: 22px;
`;

const TitleOrg = styled(TitleByID)`
  width: 90%;
  margin-bottom: 10vh;
`;

export { CardTitle, Title, TitleByID, TitleOrg };
