import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopPadding from "./components/TopPadding";
import BottomPadding from "./components/BottomPadding";
import ModalContext, { ModalContentSchema } from "./contexts/ModalContext";
import GlobalModal from "./components/GlobalModal";
import {
  LearnContext,
  TranslateContext,
  defaultLearnLanguageValue,
  defaultTranslateLanguageValue,
} from "./contexts/LanguageContext";
import SignedInView from "./components/SignedInView";
import { SignedOutView } from "./components/SignedOutView";
import UserContext, {
  BasicUserSchema,
  UserSchema,
} from "./contexts/UserContext";
import { readDataFromLocalAsync, storeDataToLocalAsync } from "./utils/Storage";
// @ts-ignore
import { BACKEND_URL } from "@env";

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

  const defaultSignedIn = null;
  const [triedSession, setTriedSession] = useState(false);
  const [signedIn, setSignedIn] = useState(
    defaultSignedIn as null | UserSchema
  );

  // prevent infinite looping with state variable.
  if (!triedSession) {
    readDataFromLocalAsync("user").then((storedUserString) => {
      if (storedUserString !== null && storedUserString !== "") {
        try {
          const newUserJSON: UserSchema = JSON.parse(storedUserString);
          setSignedIn(newUserJSON);
        } catch {
          // error parsing
        }
      } else {
        setTriedSession(true);
      }
    });
  }
  // signs in user and stores locally
  const signInUser = async (newUserBasicInfo: BasicUserSchema) => {
    const newUserBasicString = JSON.stringify(newUserBasicInfo);
    const result = await fetch(`${BACKEND_URL}/auth`, {
      method: "POST",
      body: newUserBasicString,
      headers: {
        "Content-type": "application/json",
      },
    });
    // await for payload
    const resultPayload = await result.json();
    const resultPayloadString = JSON.stringify(result);
    // store stringified payload
    await storeDataToLocalAsync("user", resultPayloadString);
    // store user info in context
    setSignedIn(resultPayload);
  };
  // signs out user and clears local storage
  const signOutUser = async () => {
    await storeDataToLocalAsync("user", "");
    setSignedIn(null);
    setModalState({ showModal: false, modalContent: undefined });
  };
  return (
    <View style={styles.container}>
      <UserContext.Provider
        value={{
          user: signedIn,
          signInUser,
          signOutUser,
        }}
      >
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
                <SignedOutView signInUser={signInUser} />
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
      </UserContext.Provider>
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
