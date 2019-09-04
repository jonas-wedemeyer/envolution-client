import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-grow: ${(props) => props.grow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
  padding: 5px;
`;

const FlexColWrap = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export { FlexColWrap, FlexWrapper };
