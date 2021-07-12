import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import ProductDetail from "../products/ProductDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
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
      <Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Shops" }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
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
