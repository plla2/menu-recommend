import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const mediaQuery = window.matchMedia("(max-width :680px)").matches;
  // console.log(mediaQuery);

  const handleClick = (e) => {
    if (!e.target.classList.contains("display")) {
      e.target.classList.add("display");
      setShowMenu(true);
    } else {
      e.target.classList.remove("display");
      setShowMenu(false);
    }
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <Container className="Header flex-row">
      <Link to="/">
        <p>오늘은 식사는!?</p>
      </Link>
      {mediaQuery && (
        <svg
          className="menu"
          onClick={handleClick}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      )}

      {!mediaQuery && (
        <div className="flex-row">
          <Link to="/area">
            <button className="btn fill-btn">지역</button>
          </Link>
          <Link to="/categories">
            <button className="btn fill-btn">카테고리</button>
          </Link>
          <Link to="/ingredients">
            <button className="btn fill-btn">재료</button>
          </Link>
          <Link to="/random">
            <button className="btn fill-btn">랜덤</button>
          </Link>
        </div>
      )}
      {mediaQuery && showMenu && (
        <div className="toggle-menu flex-column absolute">
          <Link to="/area">
            <button className="btn fill-btn" onClick={hideMenu}>
              지역
            </button>
          </Link>
          <Link to="/categories">
            <button className="btn fill-btn" onClick={hideMenu}>
              카테고리
            </button>
          </Link>
          <Link to="/ingredients">
            <button className="btn fill-btn" onClick={hideMenu}>
              재료
            </button>
          </Link>
          <Link to="/random">
            <button className="btn fill-btn" onClick={hideMenu}>
              랜덤
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  z-index: 10;
  position: fixed;
  height: 5rem;
  color: white;
  background-color: #03001c;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  p {
    font-weight: 700;
    font-size: 1.5rem;
  }
  div {
    gap: 2rem;
    height: 100%;
    a {
      button {
        height: 100%;
        position: relative;
        &:hover {
          border: none;
          font-size: 1.25rem;
          color: var(--yellow);
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 8px;
          width: 0;
          right: 0;
          margin: auto;
          background-color: var(--yellow);
          transition: width 0.3s ease-in;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
  .menu {
    cursor: pointer;
  }
  .toggle-menu {
    gap: 1rem;
    top: 6rem;
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    background-color: #03001c;
    height: 18rem;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    a {
      button {
        &:hover {
          font-size: 1.1rem;
        }
        &::after {
          height: 3px;
        }
      }
    }
  }
`;
