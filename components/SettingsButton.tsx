import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import { whiteBackground } from "../styles/AppTheme";

export default function SettingsButton() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <FontAwesomeIcon icon={faCog} size={40} color={whiteBackground} />
    </View>
  );
}
