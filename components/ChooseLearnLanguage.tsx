import React from "react";
import { View, Text } from "react-native";
import LanguagePicker from "./LanguagePicker";

export default function ChooseLearnLanguage() {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          choose a language to learn
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <LanguagePicker />
      </View>
    </View>
  );
}
