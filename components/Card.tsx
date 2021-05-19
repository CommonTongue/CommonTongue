import React from "react";
import { View, StyleSheet } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";
import CardFlip from "react-native-card-flip";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card(props: {
  firstSide: React.ReactNode;
  firstSideButton: React.ReactNode;
  secondSide: React.ReactNode;
}) {
  let cardRef: CardFlip | null = null;
  const flipCard = () => {
    cardRef?.flip();
  };
  return (
    <View
      style={{ width: "80%", flex: 1, marginTop: "10%", marginBottom: "10%" }}
    >
      <CardFlip
        style={{
          height: "100%",
          width: "100%",
        }}
        ref={(card: CardFlip | null) => {
          cardRef = card;
        }}
        duration={500}
      >
        <View style={[styles.cardInner, styles.firstSide]}>
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
              elevation={8}
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
            style={[styles.cardInner, styles.secondSide]}
            // @ts-ignore
            elevation={8}
          >
            {props.secondSide}
          </View>
        </TouchableWithoutFeedback>
      </CardFlip>
    </View>
  );
}
const styles = StyleSheet.create({
  cardInner: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  firstSide: {
    shadowColor: commonBlue,
    backgroundColor: commonBlue,
  },
  secondSide: {
    backgroundColor: tongueRed,
    shadowColor: tongueRed,
  },
  touchable: { width: "100%" },
  touchableEnds: { width: "100%", height: "100%" },
  touchableEndsContainer: { flex: 1, width: "100%" },
});
