import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as Font from "expo-font";
import React from "react";

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
    <View style={styles.container}>
      <Text style={styles.text}>LOS PINGÜINITOS</Text>
      <StatusBar style="auto" />
    </View>
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
});
