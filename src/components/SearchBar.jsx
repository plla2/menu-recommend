import React from "react";
import styled from "styled-components";

export default function SearchBar(props) {
  return (
    <Container className="SearchBar flex-row">
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="좋아하는 재료를 입력해주세요."
      />
      <button className="btn outline-btn">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.6" y2="16.6"></line>
        </svg>
      </button>
    </Container>
  );
}
const Container = styled.div``;
