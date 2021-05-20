import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TranslateContext } from "../contexts/LanguageContext";
import { tongueRed } from "../styles/AppTheme";
import LanguagePicker from "./LanguagePicker";

export default function ChooseTranslateLanguage() {
  const useTranslate = useContext(TranslateContext);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>choose a language to translate to</Text>
      </View>
      <View style={styles.pickerContainer}>
        <LanguagePicker
          onLanguagePick={(value) => {
            const selectedLanguage = value as string;
            useTranslate.setLanguage(selectedLanguage);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: tongueRed,
  },
  pickerContainer: { width: "100%" },
});
