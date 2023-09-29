import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    // update the cartcntx.items
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCntx.addItem({ ...props.item, quantity: quantity });
    // cartCntx.items.push(props.item);
    // console.log("after adding to cart", cartCntx);/
  };
  return (
    <form className={classes.form}>
      {console.log("inside render", cartCntx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
