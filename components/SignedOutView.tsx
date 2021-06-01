import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { UserSchema } from "../contexts/UserContext";
import { commonBlue } from "../styles/AppTheme";
import { SignInButton, SignUpButton } from "./GoogleAuth";
import Logo from "./Logo";

export function SignedOutView(props: {
  signInUser: (newUser: UserSchema) => void;
}) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.catchPhrase}>learn the most common words first</Text>
      <View style={styles.padding} />
      <SignInButton signInUser={props.signInUser} />
      <SignUpButton signInUser={props.signInUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  padding: { height: 50 },
  catchPhrase: { color: commonBlue, fontSize: 20, fontStyle: "italic" },
});
