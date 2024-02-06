import styled from "styled-components";

export const Wrapper = styled.div`
  width: 370px;
  min-height: 500px;
  margin: 8px auto;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px lightgray;
`;

export const Back = styled.div``;

export const RoomInfo = styled.div`
  width: 100%;
  height: 80px;
  background-color: gray;
`;

export const ChattingBox = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #bf94e4;
`;

export const MessageBox = styled.div<{ $align?: string }>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: ${({ $align }) => $align};
  /* padding: 20px; */
  /* background-color: white; */
  /* border-radius: 10px; */
  /* box-shadow: 1px 1px 1px 1px lightgray; */
`;

export const Message = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px lightgray;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid black inset;
  /* text-align: center; */
  /* resize: none; */
`;

export const Input = styled.textarea`
  width: 98.3%;
  height: 100%;
  border: none;
  resize: none;
`;

export const Send = styled.button`
  width: 10%;
  height: 30%;
  font-size: 10px;
  margin-left: 89.5%;
`;
