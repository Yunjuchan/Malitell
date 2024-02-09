import styled from "styled-components";

export const Wrapper = styled.form`
  width: 1000px;
  height: 600px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #FBF3FD;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px lightgray;
`

export const TopBox = styled.div`
  width: 1000px;
  height: 80px;
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
box-shadow: 1px 1px 1px 1px lightgray;
border-radius: 10px;
justify-content: space-around;
`;

export const Label = styled.label`
  color: #bf94e4;
  width: 20%;
  margin: auto;
  text-align: center;
  font-size: 20px;
`

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
`

export const Option = styled.option`
  font-size: 15px;
`

export const Tag = styled.div<{isSelected: boolean}>`
  border: 1px solid black;
  width: 30%;
  margin: 10px;
  background-color: ${props => (props.isSelected ? 'blue' : 'white')};
  color: ${props => (props.isSelected ? 'white' : 'black')};
  box-shadow: 1px 1px 1px 1px lightgray;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

export const Filter = styled.div`
width: 280px;
height: 50px;
margin-top: 20px;
background-color: white;
box-shadow: 1px 1px 1px 1px lightgray;
border-radius: 10px;
`;

export const Title = styled.input`
width: 590px;
height: 30px;
margin-top: 20px;
padding: 10px;
font-size: 15px;
background-color: white;
box-shadow: 1px 1px 1px 1px lightgray;
border-radius: 10px;
border: none;
&:focus {
  outline: none;
  box-shadow: 1px 1px 1px 1px lightgray inset;
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
box-shadow: 1px 1px 1px 1px lightgray;
&:focus {
  outline: none;
  box-shadow: 1px 1px 1px 1px lightgray inset;
}
`

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
box-shadow: 1px 1px 1px 1px lightgray;
cursor: pointer;
`

export const GroupTitle = styled.input`
width: 928px;
height: 30px;
margin-top: 20px;
padding: 10px;
font-size: 15px;
background-color: white;
box-shadow: 1px 1px 1px 1px lightgray;
border-radius: 10px;
border: none;
&:focus {
  outline: none;
  box-shadow: 1px 1px 1px 1px lightgray inset;
}
`;