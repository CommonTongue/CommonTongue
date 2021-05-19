import React, { createRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { commonBlue, tongueRed, whiteBackground } from "../styles/AppTheme";
import CardFlip from "react-native-card-flip";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Card(props: {
  firstSide: React.ReactNode;
  secondSide: React.ReactNode;
}) {
  let cardRef: CardFlip | null = null;
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
        <TouchableWithoutFeedback
          style={{ height: "100%", width: "100%" }}
          onPress={() => {
            cardRef?.flip();
          }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
              backgroundColor: commonBlue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { height: 1, width: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
              shadowColor: commonBlue,
            }}
            // @ts-ignore
            elevation={8}
          >
            {props.firstSide}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={{ height: "100%", width: "100%" }}
          onPress={() => {
            cardRef?.flip();
          }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
              backgroundColor: tongueRed,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              shadowOffset: { height: 1, width: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 10,
              shadowColor: tongueRed,
            }}
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
