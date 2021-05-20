import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Linking, View, StyleSheet, Text } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";

export default function SettingsPage() {
  return (
    <View>
      <Text style={styles.title}>settings</Text>
      <Text style={styles.text}>we don't have any settings for you yet.</Text>
      <Text
        style={[styles.text, styles.link]}
        onPress={() => Linking.openURL("https://www.furkantoprak.com")}
      >
        developed by Furkan Toprak
      </Text>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <FontAwesomeIcon icon={faCopyright} size={30} />
        <Text>Copyright 2021- Furkan Toprak, All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: tongueRed,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  link: {
    color: commonBlue,
    textDecorationLine: "underline",
  },
});
