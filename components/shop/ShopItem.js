import React from "react";
import { Text, View, Image } from "react-native";

// import { Image } from "../../styles";
const ShopsItem = ({ shop, navigation }) => {
  return (
    <View>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={{ uri: shop.image }}
      />
      <Text onPress={() => navigation.navigate("ShopDetail", { shop: shop })}>
        {shop.name}
      </Text>
    </View>
  );
};

export default ShopsItem;
