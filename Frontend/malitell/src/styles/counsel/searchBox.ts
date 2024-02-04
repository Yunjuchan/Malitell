import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .focus {
    box-shadow: 1px 1px 1px 1px lightgray inset;
  }
`

export const InputBox = styled.div`
  width: 98%;
  height: 70%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

export const Search = styled.input`
  border: none;
  width: 70%;
  height: 70%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;