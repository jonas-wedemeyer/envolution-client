import styled from 'styled-components';

const Image = styled.div`
background-image: url(${(props) => props.image});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export default Image;