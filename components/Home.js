import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Button, Center } from "native-base";

const Home = () => {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
      }}
    >
      <View>
        <Text style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
          Things
        </Text>
      </View>
      <Center flex={1}>
        <Button onPress={() => alert("hello world")}>Hello</Button>
      </Center>
    </ImageBackground>
  );
};
export default Home;
