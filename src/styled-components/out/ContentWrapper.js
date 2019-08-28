import styled from 'styled-components';

const ContentWrapper = styled.div`
  background: ${(props) => props.theme.color.secondary};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export default ContentWrapper;
