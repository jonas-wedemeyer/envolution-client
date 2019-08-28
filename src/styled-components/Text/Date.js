import styled from 'styled-components';

const Date = styled.div`
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  padding: 0 1vh 3vh 2vh;
  width: 90%;
`;

const CardDate = styled(Date)`
  font-size: ${(props) => props.theme.fontSize.extrasmall};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  height: 40px;
  padding: 0.7vh 0vw 0vh 2vw;
  width: 43%;
`;

export { CardDate, Date };
