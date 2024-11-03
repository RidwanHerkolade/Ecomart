import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css"
import { fadeIn } from "../../Variant";

const Header = () => {
  return (
    <div className="header__div" >
      <header>
        <motion.div className="header__content" variants={fadeIn("left", 0.4)} initial = "hidden" whileInView={"show"}  viewport={{ once: false, amount: 0.4 }}>
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
        </motion.div>
        <motion.div className="header_image" variants={fadeIn("right",0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.4}}>
          <div className="img__header">
            <img src="./images/header.png" />
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
