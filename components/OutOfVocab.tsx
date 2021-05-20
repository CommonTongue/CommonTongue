import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { tongueRed } from "../styles/AppTheme";

export default function OutOfVocab() {
  return (
    <View style={styles.container}>
      <View style={styles.fireContainer}>
        <FontAwesomeIcon icon={faFireAlt} size={40} color={tongueRed} />
        <FontAwesomeIcon icon={faFireAlt} size={50} color={tongueRed} />
        <FontAwesomeIcon icon={faFireAlt} size={40} color={tongueRed} />
      </View>
      <Text
        style={{
          color: tongueRed,
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        you're on fire!
      </Text>
      <Text style={styles.text}>
        we don't have any more words for you to memorize for now.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "80%" },
  text: { fontSize: 20, textAlign: "center" },
  fireContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
