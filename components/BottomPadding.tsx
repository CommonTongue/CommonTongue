import React from "react";
import { View, StyleSheet } from "react-native";
import { bottomBarColor } from "../styles/AppTheme";

export const bottomPaddingHeight = 32;
export default function BottomPadding() {
  return <View style={styles.bottomPadding} />;
}

const styles = StyleSheet.create({
  bottomPadding: {
    height: bottomPaddingHeight,
    backgroundColor: bottomBarColor,
  },
});
