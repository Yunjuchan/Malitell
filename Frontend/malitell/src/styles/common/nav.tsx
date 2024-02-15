import styled from "styled-components";

export const Nav = styled.div`
  background-color: white;
  height: 80px;
  position: sticky;
  top: 0;
`;

export const Grid = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  display: grid;
  margin: auto;
  width: 1024px;
  height: 80px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* 1700px부터 무너지기 시작(반응형 또는 햄버거 준비) */
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  margin: auto 10px;
  background-color: white; 
  img {
    width: 100%;
  }
`;

export const NavItems = styled.div<{
  $col?: string;
  $row?: string;
  $align?: string;
  $paddingLeft?: string;
}>`
  /* box-shadow: 0 0 0 1px inset; */
  grid-column: ${({$col}) => $col};
  grid-row: ${({$row}) => $row};
  display: flex;
  justify-content: ${({$align}) => $align};
  margin: auto 0;
`;

export const NavItem = styled.div<{
  $size?: string;
  $width?: string;
  $weight?: string;
}>`
  text-align: center;
  justify-content: center;
  margin: auto 0;
  width: ${({$width}) => $width};
  font-size: ${({$size}) => $size};
  font-weight: ${({$weight}) => $weight};
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Item = styled.div``;
