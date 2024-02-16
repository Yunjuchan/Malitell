import styled from "styled-components";

export const Grid = styled.div`
width: 1024px;
min-height: 800px;
margin: auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 80px 70px 100px auto;
`

export const GridDetail = styled.div`
width: 1024px;
height: 100vh;
margin: auto;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 30px 70px 100px 50px auto;
`