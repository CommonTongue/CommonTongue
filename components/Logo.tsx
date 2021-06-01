import { faGrinTongue } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { tongueRed } from "../styles/AppTheme";

export default function Logo() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon size={150} color={tongueRed} icon={faGrinTongue} />
      <Text style={styles.text}>commontongue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: tongueRed,
    fontSize: 40,
    fontWeight: "bold",
  },
});
