import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopPadding from "./components/TopPadding";
import BottomPadding from "./components/BottomPadding";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Center from "./components/Center";

export default function App() {
  return (
    <View style={styles.container}>
      <TopPadding />
      <TopBar />
      <Center/>
      <BottomBar />
      <BottomPadding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});
