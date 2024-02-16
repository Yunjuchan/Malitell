import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 93%;
  min-height: 740px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const FileBox = styled.div`
  width: 90%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.input`
  width: 73.2%;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid lightgray;
`;

export const Cancle = styled.button`
  cursor: pointer;
  width: 10%;
  height: 30px;
  border: none;
  border-radius: 5px;
`;

export const DisableContents = styled.div`
  width: 90%;
  height: 50px;
  margin: 20px auto 0 auto;
`;

export const FlexBox = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.div<{ $width?: string }>`
  width: ${({ $width }) => ($width ? $width : "auto")};
  font-size: 20px;
  font-weight: 500;
  color: #bf94e4;
`;

export const Info = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FixBox = styled.div`
  width: 90%;
  height: 270px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TagBox = styled.div`
  width: 90%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ButtonBox = styled.div`
  width: 55%;
  height: 50px;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
`;

export const TagButton = styled.button`
  cursor: pointer;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  background-color: #fbf3fd;
  &.select {
    background-color: #bf94e4;
    color: white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3) inset;
  }
`;

export const Submit = styled.button`
  cursor: pointer;
  width: 90%;
  height: 40px;
  margin: auto;
  border: none;
  border-radius: 10px;
  &:hover {
  }
`;
