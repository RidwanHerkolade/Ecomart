import React from "react";
import "./Button.css";

const Button = ({shoeProductData, shoeData, filterShoeProduct, setFilterShoeProduct}) => {

  return (
    <div className="btn__div">
      <button className="btn" onClick={() => setFilterShoeProduct(shoeData)}>
        All Product
      </button>
      <button className="btn" onClick={() => shoeProductData("Adidas")}>
        Adidas
      </button>
      <button className="btn" onClick={() => shoeProductData("Nike")}>
        Nike
      </button>
      <button className="btn" onClick={() => shoeProductData("Jordan")}>
        Jordan
      </button>
    </div>
  );
};

export default Button;
