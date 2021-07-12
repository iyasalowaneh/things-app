import React from "react";
import { View, Text } from "react-native";
import { List, Spinner } from "native-base";

//components
import ShopItem from "./ShopItem";

// Styling

import { useSelector } from "react-redux";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shops.shops);
  const loading = useSelector((state) => state.shops.loading);
  if (loading) return <Spinner />;

  let shopArray = shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));
  return <List>{shopArray}</List>;
};

export default ShopList;
