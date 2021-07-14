import { Input } from "native-base";
import React, { useState } from "react";
import { Button } from "native-base";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, navigation));
  };
  return (
    <>
      <Input
        placeholder="usename"
        onChangeText={(value) => setUser({ ...user, username: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
      />
      <Input
        placeholder="password"
        onChangeText={(value) => setUser({ ...user, password: value })}
        secureTextEntry={true}
        color="black"
        backgroundColor="white"
      />
      <Button onPress={handleSubmit}>Signin</Button>
    </>
  );
};
export default Signin;
