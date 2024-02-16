import styled from "styled-components";

export const Grid = styled.div`
  width: 1024px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px 250px auto;
`