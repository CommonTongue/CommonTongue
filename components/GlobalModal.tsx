import React, { useContext } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ModalContext from "../contexts/ModalContext";
import { bottomBarColor, commonBlue } from "../styles/AppTheme";
import { bottomPaddingHeight } from "./BottomPadding";
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
      style={styles.modal}
    >
      <View style={styles.modalInner}>
        <View style={styles.contentHolder}>{useModal.modalContent}</View>
        <TouchableOpacity
          onPress={() => useModal.toggleModal(false, undefined)}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalInner: {
    backgroundColor: bottomBarColor,
    marginTop: topPaddingHeight,
    marginBottom: bottomPaddingHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  contentHolder: { width: "80%", marginTop: 30 },
  closeButton: {
    height: "10%",
    width: "80%",
    backgroundColor: commonBlue,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
