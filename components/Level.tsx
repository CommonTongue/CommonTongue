import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGrinTongue } from "@fortawesome/free-solid-svg-icons";
import { whiteBackground } from "../styles/AppTheme";

export default function Level() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faGrinTongue} size={40} color={whiteBackground} />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginLeft: 10,
          color: whiteBackground,
        }}
      >
        14
      </Text>
    </View>
  );
}
