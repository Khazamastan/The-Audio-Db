import styled from 'styled-components';
const Planet = styled.div`
border : 1px solid #f5f5f5;
border-radius : 50%;
font-size : 16px;
display : inline-flex;
width : 100px;
height : 100px;
transform : ${props => props.size ? 'scale(' + (props.size < 0.1 ? 0.1 : props.size) + ')' : 'scale(1)'};
align-items: center;
background-color : ${props => props.getRandomColor()};
justify-content: center;
transition : all 0.3s ease-in;
`
export default Planet;