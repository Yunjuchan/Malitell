import styled from "styled-components";

// 홈 화면 뒷배경
export const BackHome = styled.div`
  position: absolute;
  top: 420px;
  width: 100%;
  min-height: 80vh;
  z-index: -1;
  background-color: #fbf3fd;
`;

// 나머지 페이지들 네브바와 페이지 구분감 목적
export const Back = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  z-index: -1;
  background-color: #f7f7f7;
`;

export const BackCounsel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #f7f7f7;
`;

// 그리드 이걸로 통일(갭은 디자인 구성 볼려고 일부러 넣어둠 나중에 뺼 것!!)
export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 1024px;
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

// 그리드 안쪽 컴포넌트들 사이즈 잡는 용도
export const Box = styled.div<{
  $col?: string;
  $row?: string;
  $display?: string;
}>`
  box-shadow: 0 0 0 1px black inset;
  grid-column: ${({ $col }) => $col};
  grid-row: ${({ $row }) => $row};
  display: ${({ $display }) => $display};
`;

// 모달 컴포넌트 사용시 뒷 배경 어둡게 하는 용도
export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;
