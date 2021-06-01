import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SignInButton, SignUpButton } from "./GoogleAuth";
import Logo from "./Logo";

export function SignedOutView() {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.padding} />
      <SignInButton />
      <SignUpButton />
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
});
