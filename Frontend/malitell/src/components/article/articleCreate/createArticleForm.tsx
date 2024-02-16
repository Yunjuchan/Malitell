import { useEffect, useState } from "react";
import * as s from "../../../styles/article/createForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { createArticle } from "../../../store/article/communitySlice";
import { redirect, useNavigate } from "react-router-dom";

const tagList = ["진로", "정서", "대인관계", "경제", "건강"];
const tagEngList = ["COURSE", "EMOTION", "RELATIONSHIP", "ECONOMY", "HEALTH"]

export default function CreateArticleForm() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const navigate = useNavigate();
  const [tag, setTag] = useState("진로");
  const [tagEng, setTagEng] = useState("COURSE");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTagClick = (e: React.ChangeEvent<HTMLSelectElement> ) => {
    const selectedIndex = e.target.selectedIndex - 1;
    setTag(tagList[selectedIndex]);
    setTagEng(tagEngList[selectedIndex]);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createArticle({ title, content, tagEng });
    // if (res) {
      // navigate(`/articles/${boardType}/생성한 게시글`)
    // } 
    navigate(`/articles/${boardType}/${res}`)

    // 잘못 요청되었다는 메시지
  };

  useEffect(() => {
  }, [boardType]);

  return (
    <s.Wrapper onSubmit={handleSubmit}>
      <s.TopBox>
        <s.TagBox>
          <s.Label>주제: </s.Label>
          <s.Select onChange={handleTagClick}>
            <s.Option defaultChecked hidden value="">선택</s.Option>
            {tagList.map((tagName, index) => (
              <s.Option
                key={index}
                // onSelect={() => handleTagClick(tagName, index+1)}
                value={tagName}
              >
                {tagName}
              </s.Option>
            ))}
          </s.Select>
        </s.TagBox>
        <s.Title  value={title} onChange={handleTitleChange} placeholder="게시글 제목"></s.Title>
      </s.TopBox>
      <s.Input value={content} onChange={handleContentChange} placeholder="내용"></s.Input>
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
