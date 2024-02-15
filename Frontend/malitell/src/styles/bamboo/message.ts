import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.2s;
  width: 237px;
  height: 240px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px lightgray;
  background-color: #fbf3fd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &.modal {
    background-color: #bf94e4;
    color: white;
    font-weight: bold;
  }
  &.modal:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;
