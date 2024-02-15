import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1000px;
  height: 750px;
  margin: auto;
`

export const Title = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #bf94e4;
`

export const Content = styled.form`
  width: 90%;
  height: 680px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`

export const Warnning = styled.div`
  width: 95%;
  min-height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`

export const SubTitle = styled.div`
  margin: 20px auto;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  color: ${({color}) => color};
`

export const Text = styled.div`
  font-size: 20px;
  margin: auto;

`

export const InputBox = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 300px;
  height: 26px;
  border-radius: 5px;
  border: 1px solid gray;
`

export const Button = styled.button`
  width: 70px;
  height: 30px;
  margin-left: 5px;
  color: white;
  background-color: #bf94e4;
  border: none;
  border-radius: 5px;
  transition:0.2s;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`