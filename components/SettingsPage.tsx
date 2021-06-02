import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Linking, View, StyleSheet, Text } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";
import UserProfile from "./UserProfile";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>settings</Text>
      <UserProfile />
      <View>
        <Text
          style={[styles.text, styles.link]}
          onPress={() => Linking.openURL("https://www.furkantoprak.com")}
        >
          developed by Furkan Toprak
        </Text>
        <View style={styles.copyright}>
          <FontAwesomeIcon icon={faCopyright} size={30} />
          <Text>Copyright 2021- Furkan Toprak, All rights reserved.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    borderColor: "blue",
    borderWidth: 3,
    height: "100%",
  },
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
  copyright: { alignItems: "center", marginTop: 10 },
});
