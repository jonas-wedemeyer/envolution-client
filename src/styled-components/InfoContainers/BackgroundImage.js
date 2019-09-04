import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${(props) => props.image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: flex-end;
  width: 100%;
`;

const SmallBackgroundImage = styled(BackgroundImage)`
  border-radius: 15px;
  height: 30vh;
  width: 85%;
`;

const Background = styled.div`
  background: #f9f9f9;
`;

const BackgroundCard = styled.div`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 50px;
  border-radius: 10px;
  width: 90%;
  padding: 10px;
`;

export { Background, BackgroundCard, BackgroundImage, SmallBackgroundImage };
