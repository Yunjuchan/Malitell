import styled from "styled-components";

export const Wrapper = styled.form`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-weight: 900;
  color: #bf94e4;
`;

export const Box = styled.div`
  width: 80%;
  height: 400px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #bf94e4;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;

export const Star = styled.div`
  color: white;
  display: inline-block;

  input {
    display: none;
  }

  label {
    font-size: 3em;
    color: transparent;
    text-shadow: 0 0 0 #f0f0f0;
    &:hover {
      text-shadow: 0 0 0 yellow;
    }
    &:hover ~ label {
      text-shadow: 0 0 0 yellow;
    }
  }

  fieldset {
    display: inline-block;
    direction: rtl;
    border: 0;
  }

  input[type="radio"]:checked ~ label {
    text-shadow: 0 0 0 yellow;
  }
`;

export const Review = styled.textarea`
  width: 80%;
  height: 30%;
  padding: 10px;
  border: none;
  resize: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.input`
  transition: 0.2s;
  width: 80%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #fbf3fd;
  box-shadow: 4px 4px 4px rgba(0.2);
  &:hover {
    transition: 0.2s;
    transform: scale(1.02);
  }
`;
