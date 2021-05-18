import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { LearnContext } from "../contexts/LanguageContext";
import ModalContext from "../contexts/ModalContext";
import { commonBlue, whiteBackground } from "../styles/AppTheme";
import ChooseLearnLanguage from "./ChooseLearnLanguage";

export default function LearnLanguage() {
  const useModal = useContext(ModalContext);
  const useLearn = useContext(LearnContext);
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
        useModal.toggleModal(true, <ChooseLearnLanguage />);
      }}
    >
      <Text style={{ color: whiteBackground, fontWeight: "bold" }}>
        {useLearn.language}
      </Text>
    </TouchableOpacity>
  );
}
