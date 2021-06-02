import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";

const SCREEN_WIDTH = Dimensions.get("window").width;
const profilePictureDiameter = SCREEN_WIDTH * 0.5;
const imageURI =
  "https://static.wikia.nocookie.net/scoobydoo/images/5/53/Scooby-Doo.png/revision/latest?cb=20201229020509";
const firstName = "Furkan";
const lastName = "Toprak";
const email = "scooby@doo.com";
export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={{ uri: imageURI }} />
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    width: profilePictureDiameter,
    height: profilePictureDiameter,
    borderRadius: profilePictureDiameter,
  },
  name: {
    color: commonBlue,
    fontSize: 25,
    fontWeight: "bold",
  },
  email: {
    color: commonBlue,
    fontSize: 20,
  },
});
