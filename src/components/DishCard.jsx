import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DishCard(props) {
  return (
    <Container className="DishCard flex-row">
      <Link to={props.link}>
        <img src={props.img} alt="dish" />
      </Link>
      <div className="preview flex-column">
        <h1>{props.name}</h1>
        <div className="line flex-row">
          <p style={{ display: `${props.displayCategory}` }}>
            Category:<span>{props.category}</span>
          </p>
          <p style={{ display: `${props.displayArea}` }}>
            Area:<span>{props.area}</span>
          </p>
        </div>
        <p>{props.tags}</p>
      </div>
    </Container>
  );
}

const Container = styled.div``;
