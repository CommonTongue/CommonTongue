import React from "react";
import { View, Text } from "react-native";
// @ts-ignore
import Flag from "react-native-flags";

export default function LearnLanguage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Flag size={64} type={"flat"} code={"TR"} />
    </View>
  );
}
