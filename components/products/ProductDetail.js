import React from "react";
import { List, Spinner } from "native-base";

import {
  ShopDetailWrapper,
  ShopDetailImage,
  ShopDetailTitle,
} from "../../styles";
import { useSelector } from "react-redux";
import { Text } from "react-native";
const ProductDetail = ({ route }) => {
  const loading = useSelector((state) => state.products.loading);

  //const shop = useSelector((state) => state.shops.shops[1]);
  //const product = useSelector((state) => state.products.products);
  const { product } = route.params;

  if (loading) return <Spinner />;

  //const product = products.find((product) => product.slug === productSlug);

  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: product.image }} />

        <ShopDetailTitle>{product.name}</ShopDetailTitle>
        <Text>{product.description}</Text>
        <Text>{product.price}</Text>
      </ShopDetailWrapper>
    </>
  );
};

export default ProductDetail;
