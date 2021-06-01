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
import GoogleAuth from "./components/GoogleAuth";

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

  const [signedIn, setSignedIn] = useState(true);

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
            {signedIn === null ? (
              <SignedOutView />
            ) : (
              <SignedInView
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                level={level}
                setLevel={setLevel}
              />
            )}
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

function SignedInView(props: {
  level: number;
  setLevel: (newLevel: number) => void;
  activeTab: number;
  setActiveTab: (newActiveTab: number) => void;
}) {
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "red" }}
    >
      <TopBar level={props.level} />
      {props.activeTab === 0 && <Explore setLevel={props.setLevel} />}
      {props.activeTab === 1 && <Decks />}
      {props.activeTab === 2 && <Learn />}
      <BottomBar
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

function SignedOutView() {
  return (
    <View style={{ flex: 1, display: "flex" }}>
      {/** TODO: add logo */}
      <GoogleAuth />
    </View>
  );
}
