import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import ProductDetail from "../products/ProductDetail";
import CartList from "../cart/CartList";
import CartButton from "../cart/CartButton";
import Signin from "../users/Signin";
import Signup from "../users/Signup";
const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="HOME"
      screenOptions={{
        cardStyle: { backgroundColor: "#ade8f4" },
        headerTintColor: "#03045e",
        headerStyle: {
          backgroundColor: "#00b4d8",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="HOME" component={Home} options={{ headerShown: false }} />
      <Screen name="Signin" component={Signin} options={{ title: "Signin" }} />
      <Screen name="Signup" component={Signup} options={{ title: "Signup" }} />

      <Screen
        name="CartList"
        component={CartList}
        options={{ title: "Cart" }}
      />

      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Shops" }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => ({
          title: route.params.shop.name,

          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => {
          const { product } = route.params;
          return {
            title: product.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
