import styled from 'styled-components';

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 0vw 2vh 2vw;
  width: 100%;
  position: relative;
`;

const QuestionTitle = styled.h3`
  display: flex;
  padding: 2vh 1vw 1vh 1vw;
  font-size: 26px;
  font-weight: 700;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vh;
  width: 60%;
  position: relative;
`;

export { Fieldset, QuestionTitle, Answers };
