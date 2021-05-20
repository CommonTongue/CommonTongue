import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Animated, StyleSheet } from "react-native";
import { whiteBackground } from "../styles/AppTheme";

export default function DontKnowFeedback(props: {
  opacity: Animated.AnimatedInterpolation;
}) {
  return (
    <Animated.View
      style={[styles.dontKnowFeedback, { opacity: props.opacity }]}
    >
      <FontAwesomeIcon icon={faBan} color={whiteBackground} size={40} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  dontKnowFeedback: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    alignItems: "flex-end",
  },
});
