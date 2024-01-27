import React, { useState } from "react";
import * as g from "../../styles/grid";
import * as s from "../../styles/home_ppt";
import { Link } from "react-router-dom";

export default function Home() {
  const onClick = (e: React.MouseEvent) => {
    window.open("/comingsoon");
  };
  return (
    <>
      <s.Carousel>
        <img src="./images/home/carousel/banner1.jpg" alt="image1" />
      </s.Carousel>
      <s.Items>
        <s.Item>
          <Link to="">
            <img src="./images/home/nav/counsel.png" alt="counsel" />
            <s.ItemName>심리 상담</s.ItemName>
          </Link>
        </s.Item>
        <s.Item>
          <Link to="">
            <img src="./images/home/nav/self-diagnosis.png" alt="counsel" />
            <s.ItemName>자가진단</s.ItemName>
          </Link>
        </s.Item>
        <s.Item>
          <Link to="">
            <img src="./images/home/nav/metaverse.png" alt="counsel" />
            <s.ItemName>메타버스</s.ItemName>
          </Link>
        </s.Item>
        <s.Item>
          <Link to="">
            <img
              src="./images/home/nav/related-organizations.png"
              alt="counsel"
            />
            <s.ItemName>관련 사이트</s.ItemName>
          </Link>
        </s.Item>
        <s.Item>
          <Link to="">
            <img src="./images/home/nav/about.png" alt="counsel" />
            <s.ItemName>서비스 소개</s.ItemName>
          </Link>
        </s.Item>
      </s.Items>
      <s.Background>
        <g.GridNav>
          <g.Box col="1/7" row="1/6" style={{ paddingTop: "20px" }}>
            <Link to="/bamboo" style={{ textDecoration: "none" }}>
              <s.Banner1 color="#00BC81">
                <s.BannerText>
                  <div>
                    <h1>대나무 숲</h1>
                    <span>대나무 숲 하고 싶은 말들을 편하게 해보세요.</span>
                  </div>
                </s.BannerText>
                <s.BannerImg>
                  <img src="./images/home/banner/bamboo.png" alt="bamboo" />
                </s.BannerImg>
              </s.Banner1>
            </Link>
            <s.Banner1 onClick={onClick} color="#008FC0">
              <s.BannerText>
                <div>
                  <h1>메타버스</h1>
                  <span>
                    메타버스 메타버스 공간에서 다른 사람들과 자유롭게
                    대화해보세요.
                  </span>
                </div>
              </s.BannerText>
              <s.BannerImg>
                <img src="./images/home/banner/metaverse.png" alt="bamboo" />
              </s.BannerImg>
            </s.Banner1>
          </g.Box>
          <g.Box col="7/13" row="1/6" style={{ paddingTop: "20px" }}>
            <s.Banner2 color="#BF94E4">
              <s.Banner2Text>
                <div>
                  <h1>상담이 필요하신가요?</h1>
                  <p>비밀 엄수</p>
                  <span>
                    검증된 상담심리사, 임상심리사, 전문가를 지금 만나보세요.
                  </span>
                </div>
              </s.Banner2Text>
              <s.Banner2Img>
                <img src="./images/home/banner/counsel.png" alt="counsel" />
              </s.Banner2Img>
            </s.Banner2>
          </g.Box>
          <g.Box col="1/13" row="6/13">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ marginLeft: "5px" }}>인기 게시글</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "#BF94E4" }}
                  to="/articles"
                >
                  전체보기
                </Link>
              </div>
            </div>
            <s.ArticleBox>
              <s.Article>
                <img src="./images/ppt/article1.png" />
              </s.Article>
              <s.Article>
                <img src="./images/ppt/article2.png" />
              </s.Article>
              <s.Article>
                <img src="./images/ppt/article2.png" />
              </s.Article>
            </s.ArticleBox>
          </g.Box>
        </g.GridNav>
      </s.Background>
    </>
  );
}
