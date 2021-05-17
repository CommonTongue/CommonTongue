import React from "react";
import { View } from "react-native";
import { bottomBarColor } from "../styles/AppTheme";

export const bottomPaddingHeight = 32;
export default function BottomPadding(props: { colorOverride?: string }) {
  return (
    <View
      style={{
        height: bottomPaddingHeight,
        backgroundColor: bottomBarColor,
      }}
    />
  );
}
