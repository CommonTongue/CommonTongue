import { transform } from "@babel/core";
import React, { useState } from "react";
import {
  Text,
  View,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
} from "react-native";
import { whiteBackground } from "../styles/AppTheme";
import Card from "./Card";
import PronounceButton from "./PronounceButton";

const CENTER_HEIGHT = Dimensions.get("window").height;
const CENTER_WIDTH = Dimensions.get("window").width;

export default function Center() {
  const [currentCardIndex, setCurrentCardIndex] = useState(2);
  const cardContents = [
    { vocab: "vocab 1", translation: "translation 1" },
    { vocab: "vocab 2", translation: "translation 2" },
    { vocab: "vocab 3", translation: "translation 3" },
    { vocab: "vocab 4", translation: "translation 4" },
  ].reverse();

  const cardPosition = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (panEvent, gestureState) => true,
    onPanResponderMove: (panEvent, gestureState) => {
      cardPosition.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (panEvent, gestureState) => {},
  });
  const cardRotation = cardPosition.x.interpolate({
    inputRange: [-CENTER_WIDTH / 2, 0, CENTER_WIDTH / 2],
    outputRange: ["-20deg", "0deg", "20deg"],
    extrapolate: "clamp",
  });
  const cardRotateTranslate = {
    transform: [
      { rotate: cardRotation },
      ...cardPosition.getTranslateTransform(),
    ],
  };
  return (
    <View style={styles.container}>
      {cardContents.map((cardContent, cardIndex) => {
        if (cardIndex > currentCardIndex) {
          return undefined;
        } else if (cardIndex < currentCardIndex) {
          return (
            <Animated.View
              style={[styles.actionFrame]}
              key={`animated-card-${cardIndex}`}
            >
              <Card
                firstSide={
                  <View style={styles.side}>
                    <Text style={styles.vocabText}>{cardContent.vocab}</Text>
                  </View>
                }
                firstSideButton={<PronounceButton />}
                secondSide={
                  <View style={styles.side}>
                    <Text style={styles.translationText}>
                      {cardContent.translation}
                    </Text>
                  </View>
                }
                glow={false}
              />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              style={[styles.actionFrame, cardRotateTranslate]}
              key={`animated-card-${cardIndex}`}
            >
              <Card
                firstSide={
                  <View style={styles.side}>
                    <Text style={styles.vocabText}>{cardContent.vocab}</Text>
                  </View>
                }
                firstSideButton={<PronounceButton />}
                secondSide={
                  <View style={styles.side}>
                    <Text style={styles.translationText}>
                      {cardContent.translation}
                    </Text>
                  </View>
                }
                glow={true}
              />
            </Animated.View>
          );
        }
      })}
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
  actionFrame: { width: "80%", height: "80%", position: "absolute" },
  side: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  vocabText: { fontSize: 40, marginBottom: 10 },
  translationText: { fontSize: 40 },
});
