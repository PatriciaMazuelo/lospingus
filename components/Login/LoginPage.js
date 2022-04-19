import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { login } from "./loginService";

const Separator = () => <View style={styles.separator} />;

const LoginPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const titleMessage = "Login";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = { name, password };
    try {
      await login(loginData);
      navigation.navigate("Main");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/276026780_1358944547914510_7212570213381634955_n.png")}
        style={styles.image}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <Button color="#66FF66" title={titleMessage} onPress={handleSubmit} />
        <Separator />
      </ImageBackground>
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
    backgroundColor: "#ffff"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 350,
    height: 590,
  },
});

export default LoginPage;
