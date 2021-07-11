import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./store";
//components
import Home from "./components/Home";
import ShopList from "./components/shop/ShopList";
import ShopDetail from "./components/shop/ShopDetail";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Text>Hello World!!</Text>
        {/* <Home /> */}
        {/* <ShopList /> */}
        <ShopDetail />
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
