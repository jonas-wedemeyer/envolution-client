import styled from 'styled-components';
import { Icon } from '../Visuals/Icon';

const LocationTitle = styled.h4`
  align-self: flex-end;
  color: #d3d3d3;
  margin-bottom: 10px;
`;

const Location = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const Pin = styled(Icon)`
  align-self: flex-end;
  width: 34px;
  height: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export { LocationTitle, Location, Pin };
