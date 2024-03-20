import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItemsList from "./MenuItemsList";
import { clearCart } from "../utils/cartSlice";
import { EMPTY_CART_IMAGE } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  //console.log(cartItems)
  return (
    <div className="text-center m-4 p-4 h-screen">
      <h1 className="font-semibold  text-3xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="bg-gray-700 rounded-md text-white w-20 m-3"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div>
            <img
              className="w-[280px] ml-40"
              src={EMPTY_CART_IMAGE}
              alt="empty cart"
            ></img>
            <p>
              Your Cart is empty, Good food is always being cooked and will be
              served hot by FastFeast. So, what are you waiting for, go order
              now.
            </p>
          </div>
        )}
        <MenuItemsList data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
