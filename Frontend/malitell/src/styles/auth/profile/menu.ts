import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  margin: 6.5px auto;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`

export const Image = styled.img`
  width: 95%;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: white;
`

export const TagBox = styled.div`
display: flex;
flex-wrap: wrap;
width: 95%;
height: 100px;
margin: 20px auto;
border-radius: 10px;
box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
background-color: white;
`

export const Tag = styled.div`
width: 40%;
height: 30px;
margin: 10px auto;
border-radius: 10px;
box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
background-color: white;
`

export const Nav = styled.div`
  width: 87%;
  height: 250px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow:  1.5px 1.5px 1.5px 1.5px lightgray;
  background-color: white;
`
export const NavItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 12.5%;
  margin: 0 auto;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`