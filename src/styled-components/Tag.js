import styled from 'styled-components';

const Tag = styled.div`
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.35);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.medium};
  height: 32px;
  margin-bottom: 20vh;
  padding: 0.5vh 1vh;
`;

const SmallTag = styled(Tag)`
  font-size: ${(props) => props.theme.fontSize.extrasmall};
  height: 24px;
  margin-bottom: 1vh;
  padding: 0.3vh 1vh;
`;

export { SmallTag, Tag };
