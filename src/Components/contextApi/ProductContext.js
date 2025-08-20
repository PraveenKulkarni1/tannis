import React, { createContext, useContext, useState, useEffect } from "react";
import Products from "./../Pages/Products";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const setCategoryProducts = (categoryId, products) => {
    setCategoryId(categoryId);
    setProducts(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        categoryId,
        setCategoryProducts,
        selectedCategoryId,
        setSelectedCategoryId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
