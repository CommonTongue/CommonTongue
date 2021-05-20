import React from "react";
import { View, StyleSheet } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";
import CardFlip from "react-native-card-flip";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card(props: {
  firstSide: React.ReactNode;
  firstSideButton: React.ReactNode;
  secondSide: React.ReactNode;
  glow: boolean;
}) {
  let cardRef: CardFlip | null = null;
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
              style={styles.touchableEnds}
              onPress={flipCard}
            />
          </View>
          {props.firstSideButton}
          <TouchableWithoutFeedback style={styles.touchable} onPress={flipCard}>
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
              onPress={flipCard}
            />
          </View>
        </View>

        <TouchableWithoutFeedback style={styles.touchable} onPress={flipCard}>
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
            {props.secondSide}
          </View>
        </TouchableWithoutFeedback>
      </CardFlip>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  cardInnerGlow: {
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  firstSide: {
    backgroundColor: commonBlue,
  },
  firstSideGlow: { shadowColor: commonBlue },
  secondSide: {
    backgroundColor: tongueRed,
  },
  secondSideGlow: { shadowColor: tongueRed },
  touchable: { width: "100%" },
  touchableEnds: { width: "100%", height: "100%" },
  touchableEndsContainer: { flex: 1, width: "100%" },
});
