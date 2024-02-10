import { useEffect, useState } from "react";
import * as s from "../../../styles/article/createForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { createOvercome } from "../../../store/article/overcomingSlice";
import { useNavigate } from "react-router-dom";

export default function CreateOvercomeForm() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createOvercome({title, content});
    console.log(res)
    // if (res) {
      // navigate(`/articles/${boardType}/생성한 게시글`) // 실제로는 이거로 만들거임
    // }
    navigate(`/articles/${boardType}`)

    // 잘못 요청되었다는 메시지
  };

  useEffect(() => {
    console.log(boardType);
  }, [boardType]);

  return (
    <s.Wrapper onSubmit={handleSubmit}>
      <s.TopBox>
        <s.TagBox>
          <s.Label>주제: </s.Label>
          <s.Select>
          </s.Select>
        </s.TagBox>
        <s.Title value={title} onChange={handleTitleChange}></s.Title>
      </s.TopBox>
      <s.Input value={content} onChange={handleContentChange}></s.Input>
      <s.Submit type="submit"/>
    </s.Wrapper>
  );
}
