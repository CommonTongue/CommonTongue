import React from "react";
import { View } from "react-native";
// @ts-ignore
import Flag from "react-native-flags";

export default function TranslateLanguage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flag size={64} type={"flat"} code={"US"} />
    </View>
  );
}
