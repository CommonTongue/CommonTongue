import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopPadding from "./components/TopPadding";
import BottomPadding from "./components/BottomPadding";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Center from "./components/Center";
import ModalContext, { ModalContentSchema } from "./contexts/ModalContext";
import GlobalModal from "./components/GlobalModal";
import { LearnContext, TranslateContext } from "./contexts/LanguageContext";

export default function App() {
  const [modalState, setModalState] = useState({
    showModal: false,
    modalContent: undefined,
  } as { showModal: boolean; modalContent: ModalContentSchema });

  const defaultLearnLanguage = localStorage.getItem("learnLanguage") || "?";
  const defaultTranslateLanguage =
    localStorage.getItem("translateLanguage") || "?";

  const [learnLanguage, setLearnLanguage] = useState(defaultLearnLanguage);
  const [translateLanguage, setTranslateLanguage] = useState(
    defaultTranslateLanguage
  );
  return (
    <View style={styles.container}>
      <ModalContext.Provider
        value={{
          showModal: modalState.showModal,
          modalContent: modalState.modalContent,
          toggleModal: (showModal, modalContent) => {
            setModalState({
              showModal,
              modalContent,
            });
          },
        }}
      >
        <LearnContext.Provider
          value={{
            language: learnLanguage,
            setLanguage: (newLanguage) => {
              localStorage.setItem("learnLanguage", newLanguage);
              setLearnLanguage(newLanguage);
            },
          }}
        >
          <TranslateContext.Provider
            value={{
              language: translateLanguage,
              setLanguage: (newLanguage) => {
                localStorage.setItem("translateLanguage", newLanguage);
                setTranslateLanguage(newLanguage);
              },
            }}
          >
            <TopPadding />
            <GlobalModal />
            <TopBar />
            <Center />
            <BottomBar />
            <BottomPadding />
          </TranslateContext.Provider>
        </LearnContext.Provider>
      </ModalContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
});
