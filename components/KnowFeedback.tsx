import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Animated, StyleSheet } from "react-native";
import { whiteBackground } from "../styles/AppTheme";

export const topPaddingHeight = 44;
export default function KnowFeedback(props: {
  opacity: Animated.AnimatedInterpolation;
}) {
  return (
    <Animated.View style={[styles.knowFeedback, { opacity: props.opacity }]}>
      <FontAwesomeIcon icon={faLayerGroup} color={whiteBackground} size={40} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  knowFeedback: {
    position: "absolute",
    zIndex: 100,
    width: "100%",
    alignItems: "flex-start",
  },
});
