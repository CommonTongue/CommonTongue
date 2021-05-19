import React from "react";
import { Text, View, Animated, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Animated.View style={styles.actionFrame}>
        <Card
          firstSide={
            <View style={styles.side}>
              <Text style={styles.vocabText}>sample</Text>
            </View>
          }
          firstSideButton={<PronounceButton />}
          secondSide={
            <View style={styles.side}>
              <Text style={styles.translationText}>translation</Text>
            </View>
          }
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteBackground,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
  },
  actionFrame: { width: "80%", height: "80%" },
  side: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  vocabText: { fontSize: 40, marginBottom: 10 },
  translationText: { fontSize: 40 },
});
