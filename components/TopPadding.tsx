import React from "react";
import { View } from "react-native";
import { tongueRed } from "../styles/AppTheme";

export const topPaddingHeight = 44;
export default function TopPadding() {
  return (
    <View style={{ height: topPaddingHeight, backgroundColor: tongueRed }} />
  );
}
