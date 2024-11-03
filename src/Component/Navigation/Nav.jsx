import React, { useContext, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AddContext } from "../../Context/AddContext";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variant";

import NavInput from "./NavInput";
const Nav = () => {
  // Navigation bar active links
  const [activeLink, setActiveLink] = useState("Explore");
  const handleNavActiveLink = (link) => {
    setActiveLink(link);
  };

  const { addCartItem, setAddCartItem, scrollToCategories, scrollToBlog } =
    useContext(AddContext);
  const totalCartItems = addCartItem.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  // Drop down menu link
  const [hide, setHide] = useState(false);
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <motion.div className="nav_div" variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.4 }}>
      <nav>
        <Link to="/" style={{ color: "#2A2B2B" }}>
          {" "}
          <div className="nav__logo">EcoMart</div>
        </Link>
        <div className={hide ? "nav__mobiles-hide" : "nav__mobiles"}>
          <ul>
            <li>
              {" "}
              <Link
                to="/"
                className={`link ${activeLink === "Explore" ? "active" : ""}`}
                id="active"
                onClick={() => handleNavActiveLink("Explore")}
              >
                Explore
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link
                to="/"
                className={`link ${
                  activeLink === "Phone/Tablet" ? "active" : ""
                }`}
                onClick={() => {
                  handleNavActiveLink("Phone/Tablet");
                  scrollToCategories();
                }}
              >
                Phone/Tablet
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link
                to="/"
                className={`link ${
                  activeLink === "Accessories" ? "active" : ""
                }`}
                onClick={() => {
                  handleNavActiveLink("Accessories");
                  scrollToCategories();
                }}
              >
                Accessories
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link
                to="/"
                className={`link ${activeLink === "Camera" ? "active" : ""}`}
                onClick={() => {
                  handleNavActiveLink("Camera");
                  scrollToCategories();
                }}
              >
                Camera
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link
                to="/"
                className={`link ${activeLink === "Blog" ? "active" : ""}`}
                onClick={() => {
                  handleNavActiveLink("Blog");
                  scrollToBlog();
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
          <NavInput />
         
        </div>
        <div className="nav__outline">
            <Link to="/cartproduct">
              <ShoppingCartIcon
                style={{ fontSize: "1.2rem", color: "#6A6B6C" }}
              />
              <span className="cart__count">{totalCartItems}</span>
            </Link>
            <FavoriteBorderIcon
              style={{ fontSize: "1.2rem", color: "#6A6B6C" }}
            />
            <PersonOutlineIcon
              style={{ fontSize: "1.2rem", color: "#6A6B6C" }}
            />
            <div className="menu__divs" >
            {hide ? (
              <CloseIcon style={{ fontSize: "2rem", color: "#2A2B2B" }} onClick={handleHide}/>
            ) : (
              <MenuIcon style={{ fontSize: "2rem", color: "#2A2B2B" }} onClick={handleHide}/>
            )}
          </div>
          </div>
         
      </nav>
    </motion.div>
  );
};

export default Nav;
