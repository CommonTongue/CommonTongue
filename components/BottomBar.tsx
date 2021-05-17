import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.actionButton}>
        <Text>explore</Text>
      </View>
      <View style={styles.actionButton}>
        <Text>favorite</Text>
      </View>
      <View style={styles.actionButton}>
        <Text>challenge</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: "10%",
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "row",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
