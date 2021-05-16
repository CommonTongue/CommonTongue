import React from "react";
import { Text, View } from "react-native";

export default function TopBar() {
  return (
    <View
      style={{
        height: "10%",
        backgroundColor: "#00e",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, backgroundColor: "#aed" }}></View>
      <View style={{ flex: 2, backgroundColor: "#ae3" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ea3" }}></View>
    </View>
  );
}
