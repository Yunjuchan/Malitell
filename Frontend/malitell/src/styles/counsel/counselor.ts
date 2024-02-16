import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  height: 200px;
  display: flex;
  margin-top: 1.5%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`


export const NameBox = styled.div`
  width: 80%;
  padding: 25px;
  display: flex;
`;

export const Name = styled.div`
  font-size: 30px;
  color: #bf94e4;
`;

export const Star = styled.img`
  margin-top: 5px;
  margin-left: 10px;
  width: 25px;
  height: 25px;
`;

export const Grade = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  font-size: 20px;
`;

export const Info = styled.div`
  margin: 7px 25px;
`

export const ImgBox = styled.div`
  width: 28%;
  height: 98%;
  margin: auto;
  text-align: end;
  border-radius: 10px;
`

export const Profile = styled.img`
  width: 90%;
  height: 100%;
  border-radius: 10px;
`

export const GoDetail = styled.div`
  width: 18%;
  height: 95%;
  padding-right: 4%;
  display: flex;
  align-items: end;
  color: #bf94e4;
  font-weight: 500;
`