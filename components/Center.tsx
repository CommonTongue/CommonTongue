import React from "react";
import { Text, View } from "react-native";

export default function Center() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>sample very</Text>
    </View>
  );
}
