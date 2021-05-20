import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGrinTongue } from "@fortawesome/free-solid-svg-icons";
import { whiteBackground } from "../styles/AppTheme";

export default function Level(props: { level: number }) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faGrinTongue} size={40} color={whiteBackground} />
      <Text style={styles.text}>{props.level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    color: whiteBackground,
  },
});
