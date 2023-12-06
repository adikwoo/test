import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import LoginForm from "./components/loginForm";
import Profile from "./components/Profile";
import Cart from "./components/cart";
import cartReducer from "./redux/reducers/cartReducer";
import Header from "./Header/Header";
import Nav from "./components/NavBar/Nav";
import productReducer from "./redux/reducers/productReducer";
import authReducer from "./redux/reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-wrapper">
          <Header />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/" element={<LoginForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
