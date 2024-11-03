import React, { useContext, useState } from "react";
import "./Category.css";
import { products } from "../Product/Product";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CategorySlider from "./CategorySlider";
import { AddContext } from "../../../Context/AddContext";

const Category = () => {
  const categoriesPerPage = 9;
  const [currentCategoryPage, setCurrentCategoryPage] = useState(0);
  const {
    selectedCategories,
    setSelectedCategories,
    selectedBrandName,
    setSelectedBrandName,
    addCartItem,
    setAddCartItem,
  } = useContext(AddContext);

  // determination of total page
  const totalPages = Math.ceil(products.length / categoriesPerPage);

  // setting of product/page
  const productPerPage = products.slice(
    currentCategoryPage * categoriesPerPage,
    (currentCategoryPage + 1) * categoriesPerPage
  );

  // handling of onclick to the next page
  const handleCategoriesNextPages = () => {
    if (currentCategoryPage < totalPages - 1) {
      setCurrentCategoryPage(currentCategoryPage + 1);
    }
  };
  // handling of onclick to the previous page
  const handleCategoriesPrevPages = () => {
    if (currentCategoryPage > 0) {
      setCurrentCategoryPage(currentCategoryPage - 1);
    }
  };

  // Handling of categories sidebar click
  const handleCategoriesClick = (event) => {
    setSelectedCategories(event.target.value);
    setSelectedBrandName("");
    
  };

  const handleBrandClick = (event) => {
    setSelectedBrandName(event.target.value);
    setSelectedCategories("")
  };

  const filterCategories = productPerPage.filter((product) => {
    const categoryCheck =
      selectedCategories === "" || product.Category === selectedCategories;
    const brandCheck =
      selectedBrandName === "" || product.brand === selectedBrandName;
    return categoryCheck && brandCheck;
  });

  // handling of the cart items
  const handleCartItems = (product) => {
    setAddCartItem((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id); 
      if (existingProduct) {
        // If product exists, update the quantity
        return prevItems.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product doesn't exist, add it to the cart with quantity 1
        return [
          ...prevItems,
          { ...product, price: product.price ?? 0, quantity: 1 },
        ];
      }
    });
  };

  return (
    <div className="category__div" id="categories">
      {/* <div className='categorys__divs'> */}
      <h1>Browse Category</h1>
      <div className="category__divs">
        <div className="category__content">
          <div className="aside__content">
            <aside>
              <div className="side__input">
                <h4>Category</h4>
                <div className="side__inputs">
                  <label>Smartphones and Accessories</label>
                  <input
                    type="radio"
                    name="category"
                    onChange={handleCategoriesClick}
                    value="Smartphones and Accessories"
                    checked={
                      selectedCategories === "Smartphones and Accessories"
                    }
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Wearable Technology</label>
                  <input
                    type="radio"
                    name="category"
                    value="Wearable Technology"
                    onChange={handleCategoriesClick}
                    checked={selectedCategories === "Wearable Technology"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Computers and Tablets</label>
                  <input
                    type="radio"
                    value="Computer and Tablet"
                    name="category"
                    onChange={handleCategoriesClick}
                    checked={selectedCategories === "Computer and Tablets"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Home Automation</label>
                  <input
                    type="radio"
                    value="Home Automation"
                    name="category"
                    onChange={handleCategoriesClick}
                    checked={selectedCategories === "Home Automation"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Gaming Gadgets</label>
                  <input
                    type="radio"
                    value="Gaming Gadget"
                    name="category"
                    onChange={handleCategoriesClick}
                    checked={selectedCategories === "Gaming Gadget"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
              </div>
              <div className="side__input">
                <h4>Brand</h4>
                <div className="side__inputs">
                  <label>Oraimo</label>
                  <input
                    type="radio"
                    name="brand"
                    onChange={handleBrandClick}
                    value="Oraimo"
                    checked={selectedBrandName === "Oraimo"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Apple</label>
                  <input
                    type="radio"
                    name="brand"
                    onChange={handleBrandClick}
                    value="Apple"
                    checked={selectedBrandName === "Apple"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Samsung</label>
                  <input
                    type="radio"
                    name="brand"
                    onChange={handleBrandClick}
                    value="Samsung"
                    checked={selectedBrandName === "Samsung"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Sony</label>
                  <input
                    type="radio"
                    name="brand"
                    onChange={handleBrandClick}
                    value="Sony"
                    checked={selectedBrandName === "Sony"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
                <div className="side__inputs">
                  <label>Polar</label>
                  <input
                    type="radio"
                    name="brand"
                    onChange={handleBrandClick}
                    value="Polar"
                    checked={selectedBrandName === "Polar"}
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                </div>
              </div>
              <div className="side__input">
                <h4>Price</h4>
                <div className="input__direction">
                  <div className="side__inputss">
                    <label>to</label>
                    <input type="text" />
                  </div>
                  <div className="side__inputss">
                    <label>from</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="slider__div">
                  <CategorySlider />
                </div>
              </div>
              <div className="side__input">
                <h4>rating</h4>
                <div className="side__inputs">
                  <input
                    type="radio"
                    name="rating"
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <label>& above</label>
                </div>
                <div className="side__inputs">
                  <input
                    type="radio"
                    name="rating"
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <label>& above</label>
                </div>
                <div className="side__inputs">
                  <input
                    type="radio"
                    name="rating"
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <label>& above</label>
                </div>
                <div className="side__inputs">
                  <input
                    type="radio"
                    name="rating"
                    style={{ cursor: "pointer", accentColor: "#2A2B2B" }}
                  />
                  <StarIcon style={{ color: "#F5AF35" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <StarIcon style={{ color: "#E1E1E1" }} />
                  <label>& above</label>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="categories__div">
          {filterCategories.map((product) => {
            return [
              <div className="product_cat" key={product.id}>
                <div className="product__icons">
                  <ShoppingCartIcon onClick={() => handleCartItems(product)}/>
                </div>
                <div className="product__img">
                  <img src={product.img} />
                </div>
                <div className="product__content">
                  <div className="title">{product.name}</div>
                  <div className="price">{product.price}</div>
                  <div className="rating">
                    <StarBorderIcon />
                    {product.rating} {product.reviews}
                  </div>
                </div>
              </div>,
            ];
          })}
        </div>
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
          <div>
            <ChevronLeftIcon
              onClick={handleCategoriesPrevPages}
              disabled={currentCategoryPage === 0}
            />
          </div>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-number ${
                index === currentCategoryPage ? "active" : ""
              }`}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </button>
          ))}

          <div>
            <ChevronRightIcon
              onClick={handleCategoriesNextPages}
              disabled={currentCategoryPage === totalPages - 1}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Category;
