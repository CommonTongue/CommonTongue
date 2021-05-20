import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { commonBlue, darkBackground, tongueRed } from "../styles/AppTheme";
import CardFlip from "react-native-card-flip";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card(props: {
  firstSide: React.ReactNode;
  firstSideButton: React.ReactNode;
  secondSide: React.ReactNode;
  glow: boolean;
  feedback?: React.ReactNode;
}) {
  let cardRef: CardFlip | null = null;
  const [currentSide, setCurrentSide] = useState(0);
  const flipCard = () => {
    cardRef?.flip();
  };
  return (
    <View style={styles.container}>
      <CardFlip
        style={styles.cardFlip}
        ref={(card: CardFlip | null) => {
          cardRef = card;
        }}
        duration={500}
      >
        <CardFirstSide
          glow={props.glow}
          feedback={props.feedback}
          firstSide={props.firstSide}
          firstSideButton={props.firstSideButton}
          flipCard={flipCard}
        />
        <CardSecondSide
          glow={props.glow}
          feedback={props.feedback}
          secondSide={props.secondSide}
          flipCard={flipCard}
        />
      </CardFlip>
    </View>
  );
}

function CardFirstSide(props: {
  glow: boolean;
  flipCard: () => void;
  feedback: React.ReactNode;
  firstSideButton: React.ReactNode;
  firstSide: React.ReactNode;
}) {
  return (
    <View
      style={[
        styles.cardInner,
        styles.firstSide,
        props.glow ? styles.cardInnerGlow : undefined,
        props.glow ? styles.firstSideGlow : undefined,
      ]}
    >
      <View style={styles.touchableEndsContainer}>
        <TouchableWithoutFeedback
          style={[styles.touchableEnds]}
          onPress={props.flipCard}
          onLongPress={() => {}}
        >
          {props.feedback}
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.firstSideButtonContainer}>
        {props.firstSideButton}
      </View>
      <TouchableWithoutFeedback
        style={styles.touchable}
        onPress={props.flipCard}
        onLongPress={() => {}}
      >
        <View
          // @ts-ignore
          elevation={props.glow ? 8 : 0}
        >
          {props.firstSide}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.touchableEndsContainer}>
        <TouchableWithoutFeedback
          style={styles.touchableEnds}
          onPress={props.flipCard}
          onLongPress={() => {}}
        />
      </View>
    </View>
  );
}

function CardSecondSide(props: {
  glow: boolean;
  secondSide: React.ReactNode;
  feedback: React.ReactNode;
  flipCard: () => void;
}) {
  return (
    <TouchableWithoutFeedback
      style={styles.touchable}
      onPress={props.flipCard}
      onLongPress={() => {}}
    >
      <View
        style={[
          styles.cardInner,
          styles.secondSide,
          props.glow ? styles.secondSideGlow : undefined,
          props.glow ? styles.cardInnerGlow : undefined,
        ]}
        // @ts-ignore
        elevation={props.glow ? 8 : 0}
      >
        <View>{props.feedback}</View>
        <View style={styles.secondSideContainer}>{props.secondSide}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  cardFlip: {
    height: "100%",
    width: "100%",
  },
  cardInner: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
  },
  cardInnerGlow: {
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  firstSide: {
    backgroundColor: commonBlue,
  },
  firstSideGlow: { shadowColor: darkBackground },
  firstSideButtonContainer: { alignItems: "center" },
  secondSide: {
    backgroundColor: tongueRed,
  },
  secondSideContainer: { flex: 1, justifyContent: "center" },
  secondSideGlow: { shadowColor: darkBackground },
  touchable: { width: "100%" },
  touchableEnds: { width: "100%", height: "100%" },
  touchableEndsContainer: { flex: 1, width: "100%" },
});
