import React from "react";
import { Text, View } from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import PronounceButton from "./PronounceButton";

export default function Center() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: whiteBackground,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>sample</Text>
      {/** Padding between word and pronounce button */}
      <View style={{ height: "5%" }} />
      <PronounceButton />
    </View>
  );
}
