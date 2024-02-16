import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Toggle = styled.div`
  width: 100%;
  height: 6%;
  margin-top: 10px;
  color: #bf94e4;
  display: flex;
  justify-content: space-around;
`;

export const Switch = styled.div<{ $check?: Boolean }>`
  cursor: pointer;
  width: 35%;
  padding: 5px;
  height: fit-content;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  background-color: ${({ $check }) => ($check ? "#D3D3D3" : "white")};
  box-shadow: ${({ $check }) =>
    $check
      ? "1.5px 1.5px 1.5px 1.5px gray inset"
      : "1.5px 1.5px 1.5px 1.5px lightgray"};
`;

export const MemoBox = styled.form<{ $display?: Boolean }>`
  width: 100%;
  height: 91%;
  margin: auto;
  display: flex;
  border-radius: 5px;
  background-color: white;
  display: ${({ $display }) => ($display ? "" : "none")};
`;

export const Memo = styled.textarea`
  width: 96%;
  height: 96%;
  padding: 0;
  margin: auto;
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`

export const Chat = styled.div<{ $display?: Boolean }>`
  height: 100%;
  width: 100%;
  display: ${({ $display }) => ($display ? "" : "none")};
`;

export const MessageList = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 10px;
  border-top-left-radius: 5px;
  background-color: white;
  overflow-y: scroll;
`;

export const Message = styled.div<{ $align?: string }>`
  width: 96%;
  display: flex;
  justify-content: ${({ $align }) => $align};
  margin: auto;
`;

export const Me = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: #fbf3fd;
`;

export const You = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  background-color: lightgray;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 25%;
  padding-bottom: 15px;
  margin: auto;
  text-align: end;
  background-color: #bf94e4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Input = styled.textarea`
  width: 94%;
  height: 75%;
  padding: 3%;
  border: none;
  resize: none;
  background-color: #bf94e4;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 25px;
  margin-right: 7px;
  border-radius: 5px;
  border: none;
`;
