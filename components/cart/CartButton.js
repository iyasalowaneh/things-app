import React from "react";
import { Button } from "native-base";
import { Text } from "react-native";
import { useSelector } from "react-redux";
const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  let total = 0;
  items.forEach((item) => (total += item.quantity));
  return (
    <Button onPress={() => navigation.navigate("CartList")}>
      <Text color="black">{total}QYT</Text>
      Cart
    </Button>
  );
};
export default CartButton;
