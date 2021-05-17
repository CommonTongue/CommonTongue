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
        position: "relative",
      }}
    >
      <div style={{ position: "fixed", zIndex: 10 }}>
        <Flag size={64} type={"flat"} code={"US"} />
      </div>
      <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          width: 64,
          height: 44,
        }}
      />
    </View>
  );
}
