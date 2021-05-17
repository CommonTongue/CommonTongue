import React, { useContext } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ModalContext from "../contexts/ModalContext";
import { bottomBarColor, tongueRed } from "../styles/AppTheme";
import BottomPadding, { bottomPaddingHeight } from "./BottomPadding";
import { topPaddingHeight } from "./TopPadding";

export default function GlobalModal() {
  const useModal = useContext(ModalContext);
  console.log(useModal.modalContent);
  console.log(useModal.showModal);
  return (
    <Modal
      transparent={true}
      animationType={"slide"}
      visible={useModal.showModal}
      onRequestClose={() => {
        useModal.toggleModal(false, undefined);
      }}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: bottomBarColor,
          marginTop: topPaddingHeight,
          marginBottom: bottomPaddingHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {useModal.modalContent}
        <TouchableOpacity
          onPress={() => useModal.toggleModal(false, undefined)}
          style={{ width: "100%", height: "10%", backgroundColor: "blue" }}
        >
          <View>
            <Text style={{ color: "white" }}>Close</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
