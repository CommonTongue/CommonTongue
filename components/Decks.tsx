import React from "react";
import { View, StyleSheet } from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import SignUp from "./SignUp";

export default function Decks() {
  return (
    <View style={styles.container}>
      <SignUp />
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
