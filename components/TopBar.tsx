import React from "react";
import { Text, View } from "react-native";
import { tongueRed } from "../styles/AppTheme";
import Level from "./Level";
import SettingsButton from "./SettingsButton";

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
      <View style={{ flex: 1 }}>
        <Text>from</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>to</Text>
      </View>
      <View style={{ flex: 1 }}>
          <SettingsButton />
      </View>
    </View>
  );
}
