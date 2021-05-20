import React, { useEffect, useState } from "react";
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
import DontKnowFeedback from "./DontKnowFeedback";
import KnowFeedback from "./KnowFeedback";
import OutOfVocab from "./OutOfVocab";
import PronounceButton from "./PronounceButton";

const CENTER_WIDTH = Dimensions.get("window").width;

export default function Explore(props: {
  setLevel: (newLevel: number) => void;
}) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContents = [
    { vocab: "vocab 1", translation: "translation 1" },
    { vocab: "vocab 2", translation: "translation 2" },
    { vocab: "vocab 3", translation: "translation 3" },
    { vocab: "vocab 4", translation: "translation 4" },
  ];
  const cardPosition = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (panEvent, gestureState) => true,
    onPanResponderMove: (panEvent, gestureState) => {
      cardPosition.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (panEvent, gestureState) => {
      if (gestureState.dx > CENTER_WIDTH / 2) {
        Animated.spring(cardPosition, {
          useNativeDriver: true,
          toValue: { x: CENTER_WIDTH + 100, y: gestureState.dy },
        }).start(() => {
          setCurrentCardIndex(currentCardIndex + 1);
        });
      } else if (gestureState.dx < -CENTER_WIDTH / 2) {
        Animated.spring(cardPosition, {
          useNativeDriver: true,
          toValue: { x: -CENTER_WIDTH - 100, y: gestureState.dy },
        }).start(() => {
          setCurrentCardIndex(currentCardIndex + 1);
        });
      } else {
        Animated.spring(cardPosition, {
          useNativeDriver: true,
          toValue: { x: 0, y: 0 },
          friction: 4,
        }).start(() => {});
      }
    },
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

  const dontKnowFeedbackOpacity = cardPosition.x.interpolate({
    inputRange: [-CENTER_WIDTH / 2, 0, CENTER_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });

  const knowFeedbackOpacity = cardPosition.x.interpolate({
    inputRange: [-CENTER_WIDTH / 2, 0, CENTER_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  useEffect(() => {
    cardPosition.setValue({ x: 0, y: 0 });
    props.setLevel(currentCardIndex);
  }, [currentCardIndex]);

  const nextCardOpacity = cardPosition.x.interpolate({
    inputRange: [-CENTER_WIDTH / 2, 0, CENTER_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });

  const nextCardScale = cardPosition.x.interpolate({
    inputRange: [-CENTER_WIDTH / 2, 0, CENTER_WIDTH / 2],
    outputRange: [1, 0.4, 1],
    extrapolate: "clamp",
  });

  const feedbackLabel = (
    <View style={{ margin: 30 }}>
      <KnowFeedback opacity={knowFeedbackOpacity} />
      <DontKnowFeedback opacity={dontKnowFeedbackOpacity} />
    </View>
  );
  return (
    <View style={styles.container}>
      {currentCardIndex >= cardContents.length && <OutOfVocab />}
      {currentCardIndex < cardContents.length &&
        cardContents.map((cardContent, cardIndex) => {
          if (cardIndex == currentCardIndex + 1) {
            return (
              <Animated.View
                style={[
                  styles.actionFrame,
                  {
                    opacity: nextCardOpacity,
                    transform: [{ scale: nextCardScale }],
                  },
                ]}
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
          } else if (cardIndex == currentCardIndex) {
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
                  feedback={feedbackLabel}
                />
              </Animated.View>
            );
          } else {
            return undefined;
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
