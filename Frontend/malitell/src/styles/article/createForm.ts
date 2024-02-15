import styled from "styled-components";

export const Wrapper = styled.form`
  width: 1000px;
  height: 600px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #fbf3fd;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TopBox = styled.div`
  width: 1000px;
  /* height: 80px; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TagBox = styled.div`
  display: flex;
  width: 280px;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: space-around;
`;

export const Label = styled.label`
  color: #bf94e4;
  width: 20%;
  margin: auto;
  text-align: center;
  font-size: 20px;
`;

export const Select = styled.select`
  width: 60%;
  height: 30px;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  &:focus {
    outline: 1px solid #bf94e4;
  }
  /* background-color: cyan; */
`;

export const Option = styled.option`
  font-size: 15px;
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  width: 30%;
  margin: 10px;
  background-color: ${(props) => (props.isSelected ? "blue" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Filter = styled.div`
  width: 280px;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const Title = styled.input`
  width: 590px;
  height: 30px;
  margin-top: 20px;
  padding: 10px;
  font-size: 15px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const Input = styled.textarea`
  width: 928px;
  height: 350px;
  padding: 10px;
  margin: 10px auto;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const Submit = styled.input`
  width: 948px;
  height: 50px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: #bf94e4;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const GroupTitle = styled.input`
  width: 27%;
  height: 30px;
  margin-top: 20px;
  padding: 5px;
  padding-left: 1%;
  font-size: 15px;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const DateContainer = styled.div`
  width: 60%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DateLabel = styled.div`
  color: #bf94e4;
  font-size: 15px;
`

export const DateBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;
  padding: 1px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  * {
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

