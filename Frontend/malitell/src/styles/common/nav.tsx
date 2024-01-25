import styled from "styled-components";

export const Nav = styled.div`
  background-color: white;
  height: 9vh;
  position: sticky;
  top: 0;
`;

export const Grid = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  display: grid;
  margin: auto;
  width: 62%;
  height: 9vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* 1700px부터 무너지기 시작(반응형 또는 햄버거 준비) */
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid lightgray;
  z-index: -1;
`;

export const Logo = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  margin: auto 10px;
  img {
    width: 70%;
  }
`;

export const NavItems = styled.div<{
  col?: string;
  row?: string;
  align?: string;
  paddingLeft?: string;
}>`
  /* box-shadow: 0 0 0 1px inset; */
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
  display: flex;
  justify-content: ${({ align }) => align};
  margin: auto 0;
`;

export const NavItem = styled.div<{
  size?: string;
  width?: string;
  weight?: string;
}>`
  text-align: center;
  justify-content: center;
  margin: auto 0;
  width: ${({ width }) => width};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Item = styled.div``;
