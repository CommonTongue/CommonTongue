import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalContext from "../contexts/ModalContext";
import { whiteBackground } from "../styles/AppTheme";
import SettingsPage from "./SettingsPage";

export default function SettingsButton() {
  const useModal = useContext(ModalContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          useModal.toggleModal(true, <SettingsPage />);
        }}
      >
        <FontAwesomeIcon icon={faCog} size={40} color={whiteBackground} />
      </TouchableOpacity>
    </View>
  );
}
