import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TopPadding from "./components/TopPadding";

export default function App() {
  return (
    <View style={styles.container}>
      <TopPadding />
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text style={{ color: "blue", fontSize: 40 }}>you too quentin :)</Text>
      </View>
      <View style={{ height: 32, backgroundColor: "#e0e" }} />
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
