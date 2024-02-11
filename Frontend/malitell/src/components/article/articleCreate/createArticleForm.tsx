import { useEffect, useState } from "react";
import * as s from "../../../styles/article/createForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { createArticle } from "../../../store/article/communitySlice";
import { redirect, useNavigate } from "react-router-dom";

const tagList = ["진로", "정서", "대인관계", "경제", "건강"];

export default function CreateArticleForm() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const navigate = useNavigate();
  const [tag, setTag] = useState("진로");
  const [tagSeq, setTagSeq] = useState(1);
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
    console.log(selectedIndex)
    setTag(tagList[selectedIndex]);
    setTagSeq(selectedIndex + 1);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createArticle({ title, content, worryTagSeq: tagSeq });
    // if (res) {
      // navigate(`/articles/${boardType}/생성한 게시글`)
    // } 
    navigate(`/articles/${boardType}/${res}`)

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
        <s.Title  value={title} onChange={handleTitleChange}></s.Title>
      </s.TopBox>
      <s.Input value={content} onChange={handleContentChange}></s.Input>
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
