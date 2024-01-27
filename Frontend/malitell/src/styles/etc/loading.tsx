import styled from "styled-components";

// 화면 중간에 로딩박스 배치
export const LoadingBox = styled.div`
  grid-column: 2/12;
  grid-row: 4/10;
  display: flex;
  flex-wrap: wrap;
`;

// 스피너, 메시지를 1:2 비율로 설정
export const Spinner = styled.div`
  box-shadow: 0 0 0 1px black inset;
  height: 50%;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  box-shadow: 0 0 0 1px black inset;
  height: 50%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 로딩 문구 밑에 이미지 배치
export const Image = styled.div`
  box-shadow: 0 0 0 1px black inset;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 33%;
  }
`;
