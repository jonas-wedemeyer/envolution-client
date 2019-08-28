import styled from 'styled-components';

const Info = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSize.small};  
  justify-content: space-between;
  padding: 1vh 1vw;
`;

const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  padding-top: 2vh;
  width: 70vw;
`;

const Details = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: ${(props) => props.theme.fontSize.extrasmall};
  height: 50vh;
  justify-content: space-between;
  padding: 2vh 2vh 2vh 1vh;
`;

export { Info, SubInfo, Details };
