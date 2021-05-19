import React from "react";
import { Text, View, Animated } from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import Card from "./Card";
import PronounceButton from "./PronounceButton";

export default function Center() {
  const cardContents = [
    { vocab: "vocab 1", translation: "translation 1" },
    { vocab: "vocab 2", translation: "translation 2" },
    { vocab: "vocab 3", translation: "translation 3" },
    { vocab: "vocab 4", translation: "translation 4" },
  ];
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
      <Animated.View style={{ width: "80%", height: "80%" }}>
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
            </View>
          }
          firstSideButton={<PronounceButton />}
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
      </Animated.View>
    </View>
  );
}
