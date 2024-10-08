import React, { useState } from "react";
import Nav from "../../Navigation/Nav";
import Button from "./Button";
import { shoeData } from "./ShoeData";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Explore.css";

const Explore = () => {
  // Identification of each company product
  const [filterShoeProduct, setFilterShoeProduct] = useState(shoeData);

  const shoeProductData = (company) => {
    setFilterShoeProduct(
      shoeData.filter((data) => data.company === company)
    );
  };

  const numberShoesPerPage = 12;

  const [shoeCurrentPage, setShoeCurrentPage] = useState(0);
  const totalCurrentPage = Math.ceil(filterShoeProduct.length / numberShoesPerPage);
  
  // Fixed slicing logic for pagination
  const shoePages = filterShoeProduct.slice(
    shoeCurrentPage * numberShoesPerPage,
    (shoeCurrentPage + 1) * numberShoesPerPage
  );

  const handleShoeNextPage = () => {
    if (shoeCurrentPage < totalCurrentPage - 1) {
      setShoeCurrentPage(shoeCurrentPage + 1);
    }
  };

  const handleShoePrevPage = () => {
    if (shoeCurrentPage > 0) {
      setShoeCurrentPage(shoeCurrentPage - 1);
    }
  };

  const handlePageChange = (index) => {
    setShoeCurrentPage(index);
  };

  return (
    <div>
      <Nav />
      <div className="explore__page">
        <div className="explore__pages">
          <h2>Recommended</h2>
          <Button
            shoeProductData={shoeProductData}
            shoeData={shoeData}
            setFilterShoeProduct={setFilterShoeProduct}
            filterShoeProduct={filterShoeProduct}
          />
          <div className="shoes__div">
            {shoePages.map((data) => (
              <div className="shoe_product" key={data.id}>
                <div className="product__icons">
                  <ShoppingCartIcon />
                </div>
                <div className="shoe__img">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="product__content">
                  <div className="title">{data.name}</div>
                  <div className="price">{data.newPrices}</div>
                  <div className="rating">
                    <StarIcon style={{ color: "#F5AF35" }} />
                    {data.rating} {data.reviews}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="preview__product">
            <div>
              <ChevronLeftIcon
                onClick={handleShoePrevPage}
                className={`pagination-button ${shoeCurrentPage === 0 ? "disabled" : ""}`}
              />
            </div>
            {[...Array(totalCurrentPage)].map((_, index) => (
              <button
                key={index}
                className={`page-number ${index === shoeCurrentPage ? "active" : ""}`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}

            <div>
              <ChevronRightIcon
                onClick={handleShoeNextPage}
                className={`pagination-button ${
                  shoeCurrentPage === totalCurrentPage - 1 ? "disabled" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
