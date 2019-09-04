import styled from 'styled-components';

const ColumnWrapper = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  width: 100%;
`;

const FilterWrapper = styled(ColumnWrapper)`
  border: solid 0.5px black;
  border-radius: 15px;
  margin-top: 2vh;
  padding: 2vh;
  width: 88%;
`;

export { ColumnWrapper, FilterWrapper };
