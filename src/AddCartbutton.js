import { useState } from "react";

export function AddCartbutton({ cart_value, setCartValue }) {
  
  const [Add_to_cart_class, setAdd_to_cart_class] = useState("btn btn-outline-dark mt-auto");
  const [Remove_Item, setRemove_Item] = useState(false);

  return (
    <div className="d-flex justify-content-center gap-2 text-center">
      <a
        className={Add_to_cart_class}
        href="/#"
        onClick={() => {
          setAdd_to_cart_class("btn btn-outline-dark mt-auto disabled"); // Once add to cart button clicked this line disable it
          setCartValue(cart_value + 1);
          setRemove_Item(true);
        }}
      >
        Add to cart
      </a>
      {Remove_Item?<a
        className="btn btn-outline-dark mt-auto"
        href="/#"
        onClick={() => {
          setCartValue(cart_value - 1); //Decrementing the cart value once the item removed
          setRemove_Item(false);
          setAdd_to_cart_class("btn btn-outline-dark mt-auto"); //Enabling add to cart button
        }}
      >
        Remove Item
      </a>:""}
    </div>
  );
}
