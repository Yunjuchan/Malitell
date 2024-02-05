import styled from "styled-components";
import * as g from "../../styles/grid";
import { GridCreate } from "../../styles/article/grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import CreateForm from "../../components/article/articleCreate/createForm";

const Text = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 20px;
  color: #bf94e4;
`;

export default function ArticleCreate() {
  const onClick = () => {
    window.history.back();
  };
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
            &nbsp;&nbsp;게시글 작성
          </Text>
        </g.Box>
        <g.Box $col="1/13" $row="2/3">
        <CreateForm />
        </g.Box>
      </GridCreate>
    </>
  );
}
