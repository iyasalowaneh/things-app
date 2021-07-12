import React from "react";
import { List, Spinner } from "native-base";

import {
  ShopDetailWrapper,
  ShopDetailImage,
  ShopDetailTitle,
} from "../../styles";
import { useSelector } from "react-redux";
import ProductList from "../products/ProductList";
import { Text } from "react-native";
const ShopDetail = ({ navigation, route }) => {
  const loading = useSelector((state) => state.shops.loading);

  //const shop = useSelector((state) => state.shops.shops[1]);
  const products = useSelector((state) => state.products.products);
  const { shop } = route.params;

  if (loading) return <Spinner />;

  const productsFromproductStore = shop.products.map((product) =>
    products.find((_product) => _product.id === product.id)
  );

  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />

        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <ProductList
        navigation={navigation}
        products={productsFromproductStore}
      />
    </>
  );
};

export default ShopDetail;
