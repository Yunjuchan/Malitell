import styled from "styled-components";

export const GridList = styled.div`
display: grid;
width: 1024px;
max-height: 150vh;
margin: auto;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 70px 40px auto;
`

export const GridCreate = styled.div`
display: grid;
width: 1024px;
max-height: 100vh;
margin: auto;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 100px 700px; 
`