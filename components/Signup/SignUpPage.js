import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { signup } from "./signupService";

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  const validateEmail = (email) => {
    const regexp = /\S+@\S+\.\S+/;
    return regexp.test(email);
  };

  const handleSubmit = async (event) => {
    const emailValidator = validateEmail(email);
    event.preventDefault();
    if (password !== passwordConfirm) {
      setErrorMessage("Las contrase;as no coinciden");
      setError(true);
    }
    if (password.length > 8) {
      setErrorMessage("Su contrase;a debe tener al menos 8 caracteres");
      setError(true);
    }
    if (emailValidator === false) {
      setErrorMessage("El email introducido no es valido");
      setError(true);
    }

    try {
      const signupData = { name, email, password };
      await signup(signupData);
      navigation.navigate("Main");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/278083798_621472055999603_3433377632387532061_n.png")}
      >
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          keyboardType="email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => setPasswordConfirm(text)}
        ></TextInput>
        {error === true && (
          <>
            <Text style={styles.text}>{errorMessage}</Text>
            <Button
              color="#FF0000"
              onPress={resetError}
              title="Cerrar"
            ></Button>
          </>
        )}
        <Button
          disabled={
            !name ||
            !email ||
            !password ||
            !passwordConfirm ||
            password !== passwordConfirm
          }
          onPress={handleSubmit}
          title="Registrarse"
        ></Button>
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
    backgroundColor: "#ffff",
  },
  text: {
    color: "#FF0000",
    textAlign: "center",
  },
  image: {
    width: 357,
    height: 600,
  },
});

export default SignUpPage;
