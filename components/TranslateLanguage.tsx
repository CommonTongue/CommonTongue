import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { TranslateContext } from "../contexts/LanguageContext";
import ModalContext from "../contexts/ModalContext";
import { commonBlue, whiteBackground } from "../styles/AppTheme";
import ChooseTranslateLanguage from "./ChooseTranslateLanguage";

export default function TranslateLanguage() {
  const useTranslate = useContext(TranslateContext);
  const useModal = useContext(ModalContext);

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: "80%",
        backgroundColor: commonBlue,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={0.8}
      onPress={() => {
        useModal.toggleModal(true, <ChooseTranslateLanguage />);
      }}
    >
      <Text style={{ color: whiteBackground, fontWeight: "bold" }}>
        {useTranslate.language}
      </Text>
    </TouchableOpacity>
  );
}
