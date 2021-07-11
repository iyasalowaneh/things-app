import React from "react";
import { List } from "native-base";

//components
import ProductsItem from "./ProductItem";

// Styling

const ProductList = ({ products }) => {
  let productArray = products.map((product) => (
    <ProductsItem product={product} key={product.id} />
  ));
  return <List>{productArray}</List>;
};

export default ProductList;
