import React from "react";
import { Text, View } from "react-native";

export default function BottomBar() {
  return (
    <View
      style={{
        height: "10%",
        backgroundColor: "#eee",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          borderColor: "black",
          alignItems: "center",
        }}
      >
        <Text>explore</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>favorite</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>challenge</Text>
      </View>
    </View>
  );
}
