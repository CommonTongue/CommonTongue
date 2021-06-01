import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { whiteBackground } from "../styles/AppTheme";

export default function Learn() {
  return (
    <View style={styles.container}>
      <Text>we've shuffled your decks. are you ready to learn?</Text>
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
