import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopPadding from "./components/TopPadding";
import BottomPadding from "./components/BottomPadding";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Explore from "./components/Explore";
import Learn from "./components/Learn";
import ModalContext, { ModalContentSchema } from "./contexts/ModalContext";
import GlobalModal from "./components/GlobalModal";
import {
  LearnContext,
  TranslateContext,
  defaultLearnLanguageValue,
  defaultTranslateLanguageValue,
} from "./contexts/LanguageContext";
import Decks from "./components/Decks";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [level, setLevel] = useState(0);
  const [modalState, setModalState] = useState({
    showModal: false,
    modalContent: undefined,
  } as { showModal: boolean; modalContent: ModalContentSchema });

  const defaultLearnLanguage: string = defaultLearnLanguageValue;
  const defaultTranslateLanguage: string = defaultTranslateLanguageValue;

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
              setLearnLanguage(newLanguage);
            },
          }}
        >
          <TranslateContext.Provider
            value={{
              language: translateLanguage,
              setLanguage: (newLanguage) => {
                setTranslateLanguage(newLanguage);
              },
            }}
          >
            <TopPadding />
            <GlobalModal />
            <TopBar level={level}/>
            {activeTab === 0 && <Explore setLevel={setLevel}/>}
            {activeTab === 1 && <Decks />}
            {activeTab === 2 && <Learn />}
            <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
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
