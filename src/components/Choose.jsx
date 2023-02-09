import React, { useState } from "react";
import styled from "styled-components";

export default function Choose(props) {
  const [display, setDisplay] = useState(false);
  const [label, setLabel] = useState("지역 보기");

  const handleClick = (e) => {
    if (!e.target.classList.contains("display")) {
      e.target.classList.add("display");
      setDisplay(true);
      setLabel("닫기");
    } else {
      e.target.classList.remove("display");
      setDisplay(false);
      setLabel("지역 보기");
    }
  };

  return (
    <Container className="Choose flex-row">
      <input
        type="text"
        placeholder={`원하는 ${props.type}을 선택하세요 !`}
        value={props.value}
        readOnly
      />
      <div className="dropdown flex-row">
        <span onClick={handleClick}>{label}</span>
        {display ? (
          <div className="dropdown-content absolute flex-column">
            {props.property}
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

const Container = styled.div``;
