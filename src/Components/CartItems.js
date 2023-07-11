import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cartContext";
import { CartAmountToggle } from "./CartAmountToggle";
import { useState } from "react";

export const CartItem = ({ id, name, image, amount }) => {
  const { removeItem } = useCartContext();
  let[minAmount,setMinAmount] =useState(1);
   const setDecrease = () => {
    minAmount>1?setMinAmount(minAmount-1):removeItem(id);
  };

  const setIncrease = () => {
    setMinAmount(minAmount+1);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
        ₹ {amount}
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={minAmount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
        ₹ {(minAmount * amount).toFixed(2)}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} style={{transform:"scale(0.8)"}}/>
      </div>
    </div>
  );
};

