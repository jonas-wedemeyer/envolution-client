import styled from 'styled-components';

const ListImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 267px;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.7) 50%
    ),
    url(${(props) => props.image});
`;

export default ListImage;
