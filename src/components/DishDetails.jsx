import React from "react";
import styled from "styled-components";

export default function DishDetails(props) {
  return (
    <Container className="DishDetails flex-row">
      <div className="left flex-column">
        <img src={props.img} alt="meal" />
      </div>

      <div className="right flex-column">
        <h3>{props.name}</h3>
        <h4>Ingredients needed:</h4>
        <div className="ingredients-needed flex-row">
          <ul className="flex-column">{props.ingredients}</ul>
          <ul className="flex-column">{props.measures}</ul>
        </div>
      </div>

      <div className="side-info flex-row absolute">
        <div className="tags flex-row">
          <span>{props.area}</span>
          <span>{props.category}</span>
          {props.tags}
        </div>
        <a
          className="video flex-row"
          href={props.youtube}
          target="_blank"
          rel="noreferrer"
        >
          유튜브에서 더보기
        </a>
      </div>

      <div className="instructions flex-column absolute">
        <h4>Instructions: </h4>
        <p className="inst">{props.instructions}</p>
      </div>
    </Container>
  );
}
const Container = styled.div``;
