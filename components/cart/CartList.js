import React from "react";
import { Button, List } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";

//components
import CartItem from "./CartItem";
import { checkoutCart } from "../../store/actions/cartActions";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.users.users);
  console.log(user);
  const dispatch = useDispatch();
  let cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.productId),
      quantity: item.quantity,
    }))
    .map((item) => (
      <CartItem
        item={item}
        navigation={navigation}
        quantity={item.quantity}
        key={item.id}
      />
    ));
  const handelCheckout = () => {
    dispatch(checkoutCart());
    alert("thank You for choosing us");
  };
  const handelPress = () => {
    Alert.alert(
      "Signin",
      "please sginin to complete your purchase",
      [
        { text: "sginin", onPress: () => navigation.navigate("Signin") },
        { text: "cancel", onPress: () => navigation.navigate("HOME") },
      ],

      { cancelable: false }
    );
  };
  // alert("please sginin to complete your purchase");

  return (
    <>
      <List>{cartList}</List>
      {user ? (
        <Button title="Checkout" onPress={handelCheckout}>
          Checkout
        </Button>
      ) : (
        <Button title="signin" onPress={handelPress}>
          Checkout
        </Button>
      )}
    </>
  );
};

export default CartList;
