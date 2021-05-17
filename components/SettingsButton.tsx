import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import { tongueRed } from "../styles/AppTheme";

export default function SettingsButton() {
  return (
    <View style={{  }}>
      <FontAwesomeIcon icon={faCog} size={40} />
    </View>
  );
}
