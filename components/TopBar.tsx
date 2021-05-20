import React from "react";
import { View, StyleSheet } from "react-native";
import { tongueRed } from "../styles/AppTheme";
import LearnLanguage from "./LearnLanguage";
import Level from "./Level";
import SettingsButton from "./SettingsButton";
import TranslateLanguage from "./TranslateLanguage";

export default function TopBar(props: { level: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Level level={props.level}/>
        <SettingsButton />
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.buttonContainer}>
          <LearnLanguage />
        </View>
        <View style={styles.buttonContainer}>
          <TranslateLanguage />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "16%",
    backgroundColor: tongueRed,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  bottomRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
  },
  buttonContainer: { flex: 1, display: "flex", alignItems: "center" },
});
