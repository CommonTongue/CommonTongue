import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import ModalContext from "../contexts/ModalContext";
import { commonBlue, whiteBackground } from "../styles/AppTheme";

export default function LearnLanguage() {
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
        useModal.toggleModal(true, <Text>Hello</Text>);
      }}
    >
      <Text style={{ color: whiteBackground, fontWeight: "bold" }}>
        ENGLISH
      </Text>
    </TouchableOpacity>
  );
}
