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
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #bf94e4;
  &.profile {
    width: 80%;
  }
`;

export const Profile = styled.img`
  margin: 0 10px;
  width: 20%;
  height: 100%;
  border-radius: 50%;
  margin-right: 20px;
`

export const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
`


export const ChattingBox = styled.div`
  width: 100%;
  height: 320px;
  overflow-y: scroll;
  background-color: #bf94e4;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageBox = styled.div<{ $align?: string }>`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: ${({ $align }) => $align};
`;

export const Message = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 10px;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const InputBox = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid black inset;
  /* text-align: center; */
  /* resize: none; */
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const Send = styled.button`
  width: 10%;
  height: 30%;
  font-size: 10px;
  margin-left: 89.5%;
  border: none;
  border-radius: 5px;
  background-color: #bf94e4;
  color: white;
`;
