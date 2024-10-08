import React, { useContext } from "react";
import { AddContext } from "../../../Context/AddContext";
import Nav from "../../Navigation/Nav";
import "./CartProduct.css";

const CartProduct = () => {
  const { addCartItem, setAddCartItem } = useContext(AddContext);
  const handleRemoveItem = (id) => {
    setAddCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };
  return (
    <div className="cart__product">
      <Nav />
      <div className="cart__divs">
        <h1>shopping cart</h1>`
        {addCartItem.length === 0 ? (
          <div className="empty__cart">
            Cart is currently empty !! Kindly add to cart
          </div>
        ) : (
          <div className="carts">
            <div className="gridss">
              {addCartItem.map((item) => {
                return (
                  <div className="grid__items" key={item.id}>
                    <div className="cart__img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="cart__details">
                      <h2>{item.name}</h2>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ${item.price * item.quantity}</p>
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
