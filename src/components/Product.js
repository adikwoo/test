import React from "react";
import { Card } from "react-bootstrap";
import {  NavLink } from "react-router-dom";

const Product = (props) => {
  return (
    <Card
      className="my-3 p-3 rounded text-center mb-5 shadow bg-white"
      style={{ border: "none" }}
    >
      <NavLink to={`/product/${props.product.id}`}>
        <Card.Img
          style={{ width: "8rem" }}
          src={props.product.images[0]}
          variant="top"
        />
      </NavLink>
      <Card.Body className="rounded text-white">
        <NavLink to={`/product/${props.product.id}`} className="link-name">
          <Card.Title as="div">
            <strong>{props.product.title}</strong>
          </Card.Title>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Product;
