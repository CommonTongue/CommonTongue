import React, { useContext } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ModalContext from "../contexts/ModalContext";
import { bottomBarColor, commonBlue, tongueRed } from "../styles/AppTheme";
import BottomPadding, { bottomPaddingHeight } from "./BottomPadding";
import { topPaddingHeight } from "./TopPadding";

export default function GlobalModal() {
  const useModal = useContext(ModalContext);
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
        {/** A slab to pad inserted items uniformly */}
        <View style={{ height: 30 }} />
        {useModal.modalContent}
        <TouchableOpacity
          onPress={() => useModal.toggleModal(false, undefined)}
          style={{
            width: "80%",
            height: "10%",
            backgroundColor: commonBlue,
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
