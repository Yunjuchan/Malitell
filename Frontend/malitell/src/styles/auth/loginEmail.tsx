import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 400px;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
`

export const ToolBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  justify-content: space-between;
  align-items: top;
  svg {
    cursor: pointer;
  }
`

export const Text = styled.div`
  margin-left: 20px;
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;
`

