import styled from 'styled-components';

const Statistics = styled.h2`
  white-space: pre;
  font-size: 11px;
  font-weight: 700;
`;

const EnvironmentalBox = styled.div`
  display: flex;
  padding: 12px;
  font-size: 12px;
  justify-content: space-around;
`;

const Number = styled.div`
  font-size: 38px;
  padding-right: 15px;
`;

const NumberOne = styled.div`
  font-size: 38px;
  border-right: 1px solid grey;
  padding-right: 50px;
`;

export { Statistics, EnvironmentalBox, Number, NumberOne };
