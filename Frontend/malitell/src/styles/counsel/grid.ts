import styled from "styled-components";

export const Grid = styled.div`
width: 1024px;
height: 100vh;
margin: auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 80px 70px 100px;
`

export const GridDetail = styled.div`
width: 1024px;
height: 100vh;
margin: auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 30px 70px 100px 50px auto;
`