import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoogleAuth from "./GoogleAuth";

export function SignedOutView() {
  return (
    <View style={styles.container}>
      {/** TODO: add logo */}
      <GoogleAuth />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
  });