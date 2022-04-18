import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { login } from "./loginService";

const Separator = () => <View style={styles.separator} />;

const LoginPage = ({navigation}) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const titleMessage = "Login";


  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {name, password}
    try {
      console.log(loginData);
      await login(loginData);
      console.log("Logged!!")
      navigation.navigate("Main")
    } catch (err) {
      
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        //value={text}
        style={styles.input}
        //onChangeText={handleChange}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <TextInput
        //value={text}
        secureTextEntry={true}
        style={styles.input}
        //onChangeText={handleChange}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>

      <Button color="#C5F5CB" title={titleMessage} onPress={handleSubmit} />
      <Separator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LoginPage;
