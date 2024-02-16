import styled from "styled-components";
import * as g from "../../styles/grid";
import { GridCreate } from "../../styles/article/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import CreateArticleForm from "../../components/article/articleCreate/createArticleForm";
import CreateGatherForm from "../../components/article/articleCreate/createGatherForm";
import CreateOvercomeForm from "../../components/article/articleCreate/createOvercomeForm";
import { useEffect, useState } from "react";

const Text = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 20px;
  color: #bf94e4;
`;

export default function ArticleCreate() {
  const state = sessionStorage.getItem("state") || "";
  const parsedData = JSON.parse(state);
  const boardType = parsedData.boardType;
  const [board, setBoard] = useState("");
  const onClick = () => {
    window.history.back();
  };

  useEffect(() => {
    if (boardType === "community") {
      setBoard("자유게시판");
    } else if (boardType === "gather") {
      setBoard("자조모임");
    } else if (boardType === "overcome") {
      setBoard("극복사례");
    }
  });
  return (
    <>
      <g.Back />
      <GridCreate>
        <g.Box $col="1/13" $row="1/2">
          <Text>
            <FontAwesomeIcon
              onClick={onClick}
              icon={faBackward}
              style={{ color: "#bf94e4", cursor: "pointer" }}
            />
            &nbsp;&nbsp;{board}
          </Text>
        </g.Box>
        <g.Box $col="1/13" $row="2/3">
          <></>
          {boardType === "community" ? (
            <CreateArticleForm />
          ) : boardType === "gather" ? (
            <CreateGatherForm />
          ) : (
            <CreateOvercomeForm />
          )}
        </g.Box>
      </GridCreate>
    </>
  );
}
