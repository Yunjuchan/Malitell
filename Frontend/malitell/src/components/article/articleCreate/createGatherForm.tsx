import { useEffect, useState } from "react";
import * as s from "../../../styles/article/createForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  SelfHelpGroupForm,
  createSHGroup,
} from "../../../store/article/gatherSlice";
import { useNavigate } from "react-router-dom";

const tagList = ["A", "B", "C"];

export default function CreateGatherForm() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const navigate = useNavigate();
  const [tagSeq, setTagSeq] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selfHelpGroupHeadCount, setSelfHelpGroupHeadCount] = useState(0);
  const [selfHelpGroupTitle, setSelfHelpGroupTitle] = useState("");
  const [selfHelpType, setSelfHelpType] = useState("A");
  const handleTagClick = (e: React.ChangeEvent<HTMLSelectElement> ) => {
    const selectedIndex = e.target.selectedIndex - 1;
    console.log(selectedIndex)
    setSelfHelpType(tagList[selectedIndex]);
    setTagSeq(selectedIndex + 1);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleHeadCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelfHelpGroupHeadCount(Number(e.target.value));
  };

  const handleGroupTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelfHelpGroupTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createSHGroup({
      selfHelpGroupTitle,
      selfHelpGroupContent: content,
      // times: ["여기에 데이터를 잘 집어넣어줘야함"],
      times: [2402101900, 2402171900],
      selfHelpType,
      selfHelpGroupHeadCount,
      title,
      content,
      worryTagSeq: tagSeq,
    });
    if (res) {
      // navigate(`/articles/${boardType}/생성한 게시글`)
      navigate(`/articles/${boardType}`);
    }
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
          <s.Select onChange={handleTagClick}>
            <s.Option disabled>선택</s.Option>
            {tagList.map((tagName, index) => (
              <s.Option
                key={index}
                value={tagName}
              >
                {tagName}
              </s.Option>
            ))}
          </s.Select>
        </s.TagBox>
        <s.Title value={title} onChange={handleTitleChange}></s.Title>
        <s.GroupTitle
          value={selfHelpGroupTitle}
          onChange={handleGroupTitleChange}
        ></s.GroupTitle>
      </s.TopBox>
      <s.Input value={content} onChange={handleContentChange}></s.Input>
      <input
        type="number"
        value={selfHelpGroupHeadCount}
        onChange={handleHeadCountChange}
      />
      <input type="date" value={"처음 자조모임 날짜"} />
      <input type="time" value={"처음 자조모임 시간"} />
      <input type="number" value={"자조모임 회차"} />
      {/* 이걸로  세개 조합해서 times라는 데이터를 만들어서 handleSubmit에 넣어주어야함*/}
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
