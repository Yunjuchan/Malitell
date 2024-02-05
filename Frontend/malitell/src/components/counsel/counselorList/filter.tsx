import React, { useState } from "react";
import { Wrapper, Button, Select } from "../../../styles/counsel/filterBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const collapse = (index: number) => {
    setActiveIndexes(
      activeIndexes.includes(index)
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index]
    );
  };

  return (
    <Wrapper>
      {["가능 일시", "나의 증상", "상담 방식", "성별"].map((title, index) => (
        <div key={index}>
          <Button
            className={`collapsible ${
              activeIndexes.includes(index) ? "active" : ""
            } ${index === 0 ? "top" : ""} ${
              index === 3 && !activeIndexes.includes(index) ? "bottom" : ""
            }`}
            onClick={() => collapse(index)}
          >
            {title}
            {activeIndexes.includes(index) ? (
              <FontAwesomeIcon
                icon={faCaretUp}
                style={{ color: "#bf94e4" }}
                size="2x"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#bf94e4" }}
                size="2x"
              />
            )}
          </Button>
          <Select
            className={`content ${
              activeIndexes.includes(index) ? "active" : ""
            } ${index === 3 && activeIndexes.includes(index) ? "bottom" : ""}`}
          >
            test
          </Select>
        </div>
      ))}
    </Wrapper>
  );
}
