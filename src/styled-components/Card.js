import styled from 'styled-components';

const Card = styled.div`
  border-radius: 3;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: ${(props) => props.zIndex};
  background: rgba(255, 255, 255, 0);
`;

export default Card;
