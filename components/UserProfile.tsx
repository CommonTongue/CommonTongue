import React, { useContext } from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import UserContext from "../contexts/UserContext";
import { commonBlue } from "../styles/AppTheme";

const SCREEN_WIDTH = Dimensions.get("window").width;
const profilePictureDiameter = SCREEN_WIDTH * 0.5;

export default function UserProfile() {
  const useProfile = useContext(UserContext);
  const user = useProfile.user;
  const imageURI = user?.photoUrl;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const email = user?.email;
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
