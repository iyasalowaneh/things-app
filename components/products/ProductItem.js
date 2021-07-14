import React, { useState } from "react";
import { Image } from "react-native";
import { List } from "native-base";
import { ShopItemStyled } from "../../styles";
import NumericInput from "react-native-numeric-input";
import { Button } from "native-base";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/actions/cartActions";

const ProductsItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    dispatch(addItemToCart(newItem));
  };
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
      <NumericInput
        value={quantity}
        onChange={setQuantity}
        onLimitReached={(isMax, msg) => console.log(isMax, msg)}
        totalWidth={240}
        totalHeight={50}
        iconSize={25}
        step={1}
        valueType="real"
        rounded
        textColor="#B0228C"
        iconStyle={{ color: "white" }}
        rightButtonBackgroundColor="#EA3788"
        leftButtonBackgroundColor="#E56B70"
        initValue={quantity}
      />
      <Button onPress={handleAdd} disabled={quantity <= 0}>
        Add
      </Button>
    </List>
  );
};

export default ProductsItem;
