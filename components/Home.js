import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";




const Home = ({navigation}) => {
  const titleMessage = "Login";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title={titleMessage}
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      />
      <TouchableOpacity style={styles.button} />
      <TouchableOpacity style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcce5",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontFamily: "indie-flower",
  },
  button: {
    width: "80%",
    backgroundColor: "white",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default Home;
