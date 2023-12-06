import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Loader from "./loader/Loader";
import { Col } from "react-bootstrap";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data.products)))
      .then((a) => setLoading(false))
      .catch((err) => {
        const a = err;
        setError(true);
      });
  }, [dispatch]);

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProducts = categoryFilter
    ? searchedProducts.filter((product) => product.category === categoryFilter)
    : searchedProducts;

  const sortedProducts = sortBy
    ? [...filteredProducts].sort((a, b) => {
        if (sortBy === "priceUp") {
          return a.price - b.price;
        } else if (sortBy === "priceDown") {
          return b.price - a.price;
        }
        return 0;
      })
    : filteredProducts;

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };
  console.log(categoryFilter);

  console.log(products);
  return (
    <div>
      {error ? (
        <div>error</div>
      ) : loading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <h2>Product List</h2>
          <div className="flex">
            <label htmlFor="searchInput">Search:</label>
            <input
              type="text"
              id="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex">
            <label htmlFor="categorySelect">Filter by Category:</label>
            <select
              id="categorySelect"
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="smartphones">smartphones</option>
              <option value="laptops">laptops</option>
            </select>
          </div>

          <div className="flex">
            <label htmlFor="sortSelect">Sort by:</label>
            <select id="sortSelect" onChange={handleSortChange}>
              <option value="">None</option>
              <option value="priceUp">Cheap first</option>
              <option value="priceDown">Expensive first</option>
            </select>
          </div>
          {sortedProducts.map((product) => (
            <Col key={product.id} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
