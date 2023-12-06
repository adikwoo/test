import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import Loader from "./loader/Loader";
import { Card } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  console.log(product);

  if (!product) {
    return <div>{<Loader />}</div>;
  }

  return (
    <div className="mainDiv">
      <h2 className="flex">Product Detail</h2>
      <Card
        className="my-3 p-3 rounded text-center mb-5 shadow bg-white "
        style={{maxWidth:"500px"}}
      >
        <Card.Img
          style={{ width: "8rem", margin: "auto" }}
          src={product.images[0]}
          variant="top"
        />
        <Card.Body className="rounded text-white ">
          <Card.Title as="div">
            <div style={{ color: "black" }}>{product.description}</div>
            <strong style={{ color: "black" }}>
              {product.title} - ${product.price}
            </strong>
            <div style={{ color: "black" }}>
              Rating of product: {product.rating}
            </div>
          </Card.Title>
        </Card.Body>
      </Card>

      <button className="addToCart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
