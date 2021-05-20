import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Animated, StyleSheet } from "react-native";
import { tongueRed, whiteBackground } from "../styles/AppTheme";

export const topPaddingHeight = 44;
export default function KnowFeedback(props: {
  opacity: Animated.AnimatedInterpolation;
}) {
  return (
    <Animated.View style={[styles.knowFeedback, { opacity: props.opacity }]}>
      <FontAwesomeIcon icon={faThumbsUp} color={whiteBackground} size={40} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  knowFeedback: {
    position: "absolute",
    zIndex: 1000,
    width: "100%",
    alignItems: "flex-start",
  },
});
