import { Input } from "native-base";
import React, { useState } from "react";
import { Button } from "native-base";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";

const Signin = () => {
  dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
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
      <Input
        placeholder="email"
        onChangeText={(value) => setUser({ ...user, email: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
      />
      <Input
        placeholder="firstName"
        onChangeText={(value) => setUser({ ...user, firstName: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
      />
      <Input
        placeholder="lastName"
        onChangeText={(value) => setUser({ ...user, lastName: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
      />
      <Button onPress={handleSubmit}>Signup</Button>
    </>
  );
};
export default Signin;
