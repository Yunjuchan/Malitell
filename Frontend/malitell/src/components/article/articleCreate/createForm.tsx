import { useEffect, useState } from "react";
import * as s from "../../../styles/article/createForm";
import { useSelector } from "react-redux";
import { BoardState } from "../../../store/article/boardSlice";
import { RootState } from "../../../store/store";

const tagList = {
  community: ["진로", "정서", "대인관계", "경제", "건강"],
  gather: ["A", "B", "C"],
  overcome: [],
};

export default function CreateForm() {
  const boardType = useSelector((state: RootState) => state.board.boardType);
  const [worryTag, setWorryTag] = useState("");
  const handleWorryTagClick = (tagName: string) => {
    setWorryTag(tagName);
  };
  const [groupTag, setGroupTag] = useState("");
  const handleGroupTagClick = (tagName: string) => {
    setGroupTag(tagName);
  };
  useEffect(() => {
    console.log(boardType);
  }, [boardType]);

  return (
    <s.Wrapper>
      <s.TopBox>
        <s.TagBox>
          <s.Label>주제: </s.Label>
          <s.Select>
            <s.Option disabled >선택</s.Option>
            {tagList[boardType].map((tagName, index) => (
              <s.Option
                key={index}
                onSelect={() => handleWorryTagClick(tagName)}
                value={tagName}
                // isSelected={worryTag === tagName}
              >
                {tagName}
              </s.Option>
            ))}
          </s.Select>
        </s.TagBox>
        {/* <s.TagBox>
          {tagList[boardType].map((tagName, index) => (
            <s.Tag 
            key={index} 
            onClick={() => handleWorryTagClick(tagName)}
            isSelected={worryTag === tagName}
          >
            {tagName}
          </s.Tag>
          ))}
        </s.TagBox> */}
        <s.Title></s.Title>
        {/* <s.GroupTitle></s.GroupTitle> */}
      </s.TopBox>
      <s.Input></s.Input>
      <s.Submit type="submit" />
    </s.Wrapper>
  );
}
