import React from "react";
import { View, StyleSheet } from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import GoogleAuth from "./GoogleAuth";

export default function Decks() {
  return (
    <View style={styles.container}>
      <GoogleAuth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteBackground,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
});
