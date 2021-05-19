import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { TranslateContext } from "../contexts/LanguageContext";
import ModalContext from "../contexts/ModalContext";
import { commonBlue, whiteBackground } from "../styles/AppTheme";
import ChooseTranslateLanguage from "./ChooseTranslateLanguage";

export default function TranslateLanguage() {
  const useTranslate = useContext(TranslateContext);
  const useModal = useContext(ModalContext);

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => {
        useModal.toggleModal(true, <ChooseTranslateLanguage />);
      }}
    >
      <Text style={styles.text}>{useTranslate.language}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "100%",
    backgroundColor: commonBlue,
    borderRadius: 10,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: whiteBackground, fontWeight: "bold" },
});
