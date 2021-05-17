import React, { useState, useContext, createContext } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import TopPadding from "./components/TopPadding";
import BottomPadding from "./components/BottomPadding";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Center from "./components/Center";

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        { }
      </Modal>
      <TopPadding />
      <TopBar />
      <Center />
      <BottomBar />
      <BottomPadding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});
