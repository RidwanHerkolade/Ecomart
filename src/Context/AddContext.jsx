import React, { useState, createContext } from "react";
import { products } from "../Component/Service/Product/Product";
import { shoeData } from "../Component/Router/Explore/ShoeData";
export const AddContext = createContext(null);

const AddContextProvider = (props) => {
     const [currentPage, setCurrentPage] = useState(0)
     const [selectedCategories, setSelectedCategories] = useState("");
     const [selectedBrandName, setSelectedBrandName] = useState("");
     const [addCartItem, setAddCartItem] = useState([]);

     const scrollToCategories = () => {
      const categoriesSection = document.getElementById("categories")
      if (categoriesSection) {
       categoriesSection.scrollIntoView({ behavior: "smooth" });
     }
   }
   const scrollToBlog = () => {
    const blogSection = document.getElementById("blog")
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
   }
 }
  
  const contextValue = {
    currentPage,
    setCurrentPage,
    selectedCategories,
    setSelectedCategories,
    selectedBrandName,
    setSelectedBrandName,
    addCartItem,
    setAddCartItem,
    scrollToCategories,
    scrollToBlog
    // filterShoeProduct,
    // setFilterShoeProduct,
    // shoeData

  };
  return (
    <AddContext.Provider value={contextValue}>
      {props.children}
    </AddContext.Provider>
  );
};

export default AddContextProvider;
