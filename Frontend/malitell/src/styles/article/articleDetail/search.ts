import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .focus {
    box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray inset;
  }
`

export const InputBox = styled.div`
  width: 95%;
  height: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FBF3FD;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`

export const Input = styled.input`
  width: 50%;
  height: 80%;
  /* display: flex; */
  /* text-align: center; */
  font-size: 15px;
  background-color: #FBF3FD;
  border: none;
  &:focus {
    outline: none;
  }
`