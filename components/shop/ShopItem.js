import React from "react";
import { Text, View, Image } from "react-native";

// import { Image } from "../../styles";
const ShopsItem = ({ shop }) => {
  return (
    <View>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={{ uri: shop.image }}
      />
      <Text>{shop.name}</Text>
    </View>
  );
};

export default ShopsItem;
