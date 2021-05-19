import React from "react";
import { View, StyleSheet } from "react-native";
import { tongueRed } from "../styles/AppTheme";

export const topPaddingHeight = 44;
export default function TopPadding() {
  return <View style={styles.topPadding} />;
}

const styles = StyleSheet.create({
  topPadding: { height: topPaddingHeight, backgroundColor: tongueRed },
});
