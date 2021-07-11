import React from "react";
import { Image } from "react-native";
import { List, ListItem } from "native-base";
import { ShopItemStyled } from "../../styles";

const ProductsItem = ({ product }) => {
  return (
    <List>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={{ uri: product.image }}
      />
      <ShopItemStyled>{product.name}</ShopItemStyled>
    </List>
  );
};

export default ProductsItem;
