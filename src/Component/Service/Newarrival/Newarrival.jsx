import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AddContext } from "../../../Context/AddContext";
import Category from "../Category/Category";
import { products } from "../Product/Product";
import { fadeIn } from "../../../Variant";
import { motion } from "framer-motion";
import "./Newarrival.css";

const Newarrival = () => {
  const {currentPage, setCurrentPage} = useContext(AddContext)
  const itemsPerPage = 4;

  const totalPages = Math.ceil(products.length / itemsPerPage)

  const currentProduct = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPages = () => {
      if(currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1)
      }
  }
  const handlePrevPages = () => {
    if(currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
}
  return (
    <div className="newarrival__div">
      <motion.div className="arrival" variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.4}}>
        <h1>New Arrival</h1>
        <div className="product__div">
          {currentProduct.map((product) => {
            return [
              <motion.div
                className="box"
                whileHover={{ scale: [null, 1.06, 1.05] }}
                transition={{ duration: 0.2 }}
              >
              <div className="product" key={product.id} onClick={() => setSelectedPage(product)}>
                <div className="product__icons">
                  <ShoppingCartIcon />
                </div>
                <div className="product__img">
                  <img src={product.img} />
                </div>
                <div className="product__content">
                  <div className="title">{product.name}</div>
                  <div className="price">{product.price}</div>
                  <div className="rating">
                    <StarIcon style={{ color:"#F5AF35" }}/>
                    {product.rating} {product.reviews}
                  </div>
                </div>
              </div>
              </motion.div>
            ];
          })}
        </div>

        <div className="product__navigation">
          <div className="product__result">
            Show result:
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value=""></option>
            </select>
          </div>
          <div className="preview__product">
            <div onClick={handlePrevPages} disabled = {currentPage === 0}>
              <ChevronLeftIcon />
            </div>
            {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-number ${index === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </button>
          ))}
            {/* <div className="next">1</div>
            <div className="next">2</div>
            <div className="next">3</div>
            <div className="next">4</div>
            <div className="next">5</div> */}
            <div onClick={handleNextPages} disabled={currentPage === totalPages - 1}>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        
      </motion.div>
      <Category/>
    </div>
  );
};

export default Newarrival;
