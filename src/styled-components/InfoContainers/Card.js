import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border-radius: 3;
  width: 100%;
  height: 100%;
  user-select: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: ${(props) => props.zIndex};
  background: rgba(255, 255, 255, 0);
`;

const AllProjectCards = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fff;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-bottom: 2vh;
`;

export{ AllProjectCards, Card, Row };
