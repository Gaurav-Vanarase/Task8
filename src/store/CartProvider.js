import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    // cartContext.items.push(item);
  };
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: items,
    // totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "This is Your Cart ",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
