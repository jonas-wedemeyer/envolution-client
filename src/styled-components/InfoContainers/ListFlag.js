import styled from 'styled-components';

const ListFlag = styled.div`
  background: ${(props) => props.theme.color.secondary}99;
  color: ${(props) => props.theme.color.primary};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-transform: uppercase;
`;

export default ListFlag;
