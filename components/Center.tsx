import React from "react";
import { Text, View } from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import Card from "./Card";
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
        display: "flex",
      }}
    >
      <Card
        firstSide={
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 40 }}>sample</Text>
            {/** Padding between word and pronounce */}
            <View style={{ height: "5%" }} />
            <PronounceButton />
          </View>
        }
        secondSide={
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 40 }}>translation</Text>
            {/** Padding between word and pronounce */}
          </View>
        }
      />
    </View>
  );
}
