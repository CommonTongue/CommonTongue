import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonBlue, whiteBackground } from "../styles/AppTheme";

export default function LearnLanguage() {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: "80%",
        backgroundColor: commonBlue,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.8}
    >
      <Text style={{ color: whiteBackground, fontWeight: "bold" }}>
        ENGLISH
      </Text>
    </TouchableOpacity>
  );
}
