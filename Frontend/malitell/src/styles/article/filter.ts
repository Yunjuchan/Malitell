import styled from "styled-components";

export const Wrapper = styled.div`
  width: 94%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
`;

export const FilterBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 10%;
  height: 80%;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px lightgray;
  background-color: white;
  border: 0;
`;

export const CreateBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin: auto;
`;

export const CreateButton = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  width: 75px;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 17px;
  font-weight: bold;
  color: white;
  background-color: #bf94e4;
  border: 0;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;
