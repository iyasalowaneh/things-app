import React from "react";
import { Image } from "react-native";
import { List } from "native-base";
import { ShopItemStyled } from "../../styles";

const ProductsItem = ({ product, navigation }) => {
  return (
    <List>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={{ uri: product.image }}
      />
      <ShopItemStyled
        onPress={() => navigation.navigate("ProductDetail", { product })}
      >
        {product.name}
      </ShopItemStyled>
    </List>
  );
};

export default ProductsItem;
