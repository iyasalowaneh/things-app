import React from "react";
import { List } from "native-base";
import { ShopItemStyled } from "../../styles";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/actions/cartActions";

const CartItem = ({ item, quantity }) => {
  dispatch = useDispatch();
  return (
    <List>
      <ShopItemStyled>product :{item.name}</ShopItemStyled>
      <ShopItemStyled>item price : {item.price}$</ShopItemStyled>
      <ShopItemStyled>quantity:{quantity}</ShopItemStyled>
      <ShopItemStyled>total price : {quantity * item.price}$</ShopItemStyled>
      <>
        <Button
          onPress={() => dispatch(removeItemFromCart(item.id))}
          title="Remove"
        >
          Remove
        </Button>
      </>
    </List>
  );
};

export default CartItem;
