import styled from "styled-components";

export const BackHome = styled.div`
  position: absolute;
  top: 420px;
  width: 100%;
  min-height: 80vh;
  z-index: -1;
  background-color: #FBF3FD;
`
export const Back = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  z-index: -1;
  background-color: #F7F7F7;
`

// 그리드 이걸로 통일(갭은 디자인 구성 볼려고 일부러 넣어둠 나중에 뺼 것!!)
export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 62%;
  min-height: 91vh;
  margin: auto;
  /* 모바일 기기를 고려한 설계 */
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

// 사용 금지(다른 라우트들 수정 끝나면 삭제할것!!!)
export const GridNav = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  display: grid;
  min-height: 91vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  /* width: 1164px; */
  width: 62%;
  margin: auto;
  /* 모바일 기기를 고려한 설계 */
  @media screen and (max-width: 1023px) {
    width: 98%;
  }
`;

export const Box = styled.div<{ col?: string; row?: string; display?: string }>`
  box-shadow: 0 0 0 1px black inset;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
  display: ${({ display }) => display};
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
