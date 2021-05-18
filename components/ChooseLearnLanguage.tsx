import React, { useContext } from "react";
import { View, Text } from "react-native";
import { LearnContext } from "../contexts/LanguageContext";
import LanguagePicker from "./LanguagePicker";

export default function ChooseLearnLanguage() {
  const useLearn = useContext(LearnContext);
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
        <LanguagePicker
          onLanguagePick={(value) => {
            const selectedLanguage = value as string;
            useLearn.setLanguage(selectedLanguage);
          }}
        />
      </View>
    </View>
  );
}
