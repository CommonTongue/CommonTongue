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
        height: "10%",
        backgroundColor: tongueRed,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1 }}>
        <Level />
      </View>
      <View style={{ flex: 1, display: "flex" }}>
        <LearnLanguage />
      </View>
      <View style={{ flex: 1 }}>
        <TranslateLanguage />
      </View>
      <View style={{ flex: 1 }}>
        <SettingsButton />
      </View>
    </View>
  );
}
