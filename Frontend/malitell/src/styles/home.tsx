import styled from "styled-components";

export const Carousel = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

export const Items = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  margin: auto;
  width: 62%;
  height: 17vh;
`;

export const Background = styled.div`
  width: 100%;
  background-color: #fbf3fd;
`;

export const Banner1 = styled.div`
  cursor: pointer;
  display: flex;
  height: 45%;
  width: 95%;
  margin-top: 2.5%;
  /* margin-left: 1%; */
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px lightgray;
  background-color: ${({ color }) => color};
`;

export const Banner2 = styled.div`
  cursor: pointer;
  display: flex;
  height: 93%;
  width: 100%;
  margin-top: 2.5%;
  /* margin-right: 1%; */
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px lightgray;
  background-color: ${({ color }) => color};
`;

export const BannerText = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 80%;
  margin: auto;
  color: white;
`;

export const BannerImg = styled.div`
  width: 30%;
  text-align: center;
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 6%;
    width: 80%;
    height: 80%;
  }
`;

export const Banner2Text = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  height: 80%;
  margin-left: 8%;
  margin-top: 5%;
  color: white;
`;

export const Banner2Img = styled.div`
  width: 30%;
  text-align: center;
  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 30%;
    width: 100%;
    height: 70%;
  }
`;

export const ArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

export const Article = styled.div`
  box-shadow: 1.5px 1.5px 1.5px 1.5px lightgray;
  padding: 20px;
  width: 29%;
  height: 60%;
  border-radius: 10px;
  background-color: white;
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 23%;
    margin-bottom: 10px;
  }
`;

export const ArticleTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ArticleContent = styled.div`
  box-shadow: 0 0 0 1px lightgray inset;
  width: 100%;
  /* height: 60%; */
  border-radius: 10px;
  /* z-index: 1000; */
`;
