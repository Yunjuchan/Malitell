import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #bf94e4;
`;

export const Wrapper = styled.div`
  width: 227px;
  height: 150px;
  margin: 10px 4px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Label = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  width: 95%;
  height: 16px;
  text-align: center;
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;
