
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems.length);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}{" "}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ol>
      <p>Total items in cart: {cartItems.length}</p>
      <p>Total price: ${calculateTotal()}</p>
      
    </div>
  );
};

export default Cart;
