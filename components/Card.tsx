import React from "react";
import { View } from "react-native";
import { commonBlue, tongueRed, whiteBackground } from "../styles/AppTheme";

export const topPaddingHeight = 44;
export default function Card(props: { children: React.ReactNode }) {
  return (
    <View
      style={{
        width: "80%",
        flex: 1,
        marginTop: "10%",
        marginBottom: "10%",
        borderRadius: 10,
        backgroundColor: whiteBackground,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: "#000",
      }}
      elevation={8}
    >
      {props.children}
    </View>
  );
}
