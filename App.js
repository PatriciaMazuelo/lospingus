//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as Font from "expo-font";

import React from "react";
import LoginPage from "./components/Login/LoginPage";
import MainMenu from "./components/MainMenu";
import Home from "./components/Home";
import SignUpPage from "./components/Signup/SignUpPage"


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


export default function App() {
  const [loadedFonts, setLoadedFonts] = useState(false);

  useEffect(() => {
    if (!loadedFonts) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
      "indie-flower": require("./assets/fonts/IndieFlower-Regular.ttf"),
    });

    setLoadedFonts(true);
  };

  if (!loadedFonts) {
    return <View />;
  }
  
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group name="/">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Main" component={MainMenu} />
          <Stack.Screen name="Signup" component={SignUpPage}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

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
