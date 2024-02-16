import styled from "styled-components";

export const Wrapper = styled.div`
width: 370px;
min-height: 500px;
margin: 8px auto;
padding: 5px;
border-radius: 10px;
box-shadow: 2px 2px 2px 2px lightgray;
`

export const Room = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: 1px solid #bf94e4;
`

export const Profile = styled.img`
width: 15%;
height: 80%;
border-radius: 100%;
background-color: #bf94e4;
`

export const RoomInfo = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
/* background-color: gray; */
`

export const Name = styled.div`
font-size: 21px;
font-weight: bold;
color: #bf94e4;
`

export const Message = styled.div`
font-size: 15px;
color: gray;
`