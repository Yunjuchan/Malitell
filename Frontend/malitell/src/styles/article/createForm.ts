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
  justify-content: space-around;
`;

export const TagBox = styled.div`
width: 250px;
height: 30px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Tag = styled.div`
border: 1px solid black;
width: 30%;
margin-top: 10px;
height: 50px;
background-color: white;
text-align: center;
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