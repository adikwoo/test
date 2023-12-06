import React from "react";
import s from "./Nav.module.css";
import {NavLink } from "react-router-dom";

const Nav = () => {
  const activeClassName = ({ isActive }) => (isActive ? s.active : s.item);

  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/products" className={activeClassName}>
          Product Page
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile" className={activeClassName}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart" className={activeClassName}>
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
