import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <div className="header__div">
      <header>
        <div className="header__content">
          <h3>
            Discover the Future of Tech Today.<br></br>Latest Gadgets, Exclusive Deals,
            and More
          </h3>
          <p>
            Elevate your lifestyle with the latest gadgets that redefine how you
            live, work, and play.
          </p>
          <div className="header__button">
            <button className="shop_btn">Shop Now</button>
            <button className="explore_btn"><Link to="/explore" className="explore_btns">Explore Shoe Deals</Link></button>
          </div>
        </div>
        <div className="header_image">
          <div className="img__header">
            <img src="./images/header.png" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
