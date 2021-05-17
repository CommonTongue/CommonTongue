import React from "react";
import { Text, View } from "react-native";
import { tongueRed } from "../styles/AppTheme";
import LearnLanguage from "./LearnLanguage";
import Level from "./Level";
import SettingsButton from "./SettingsButton";
import TranslateLanguage from "./TranslateLanguage";

export default function TopBar() {
  return (
    <View
      style={{
        height: "16%",
        backgroundColor: tongueRed,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <View style={{ flex: 2 }}>
          <Level />
        </View>
        <View style={{ flex: 1 }}>
          <SettingsButton />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <LearnLanguage />
        </View>
        <View style={{ flex: 1 }}>
          <TranslateLanguage />
        </View>
      </View>
    </View>
  );
}
