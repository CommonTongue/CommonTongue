import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCompass, faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.actionButton}>
        <FontAwesomeIcon size={40} icon={faCompass} />
        <Text>explore</Text>
      </View>
      <View style={styles.actionButton}>
        <FontAwesomeIcon size={40} icon={faStar} />
        <Text>favorite</Text>
      </View>
      <View style={styles.actionButton}>
        <FontAwesomeIcon size={40} icon={faGraduationCap} />
        <Text>learn</Text>
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
