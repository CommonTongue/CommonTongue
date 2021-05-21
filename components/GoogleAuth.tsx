import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Google from "expo-google-app-auth";
// @ts-ignore
import { GOOGLE_OAUTH_CLIENT_ID } from "@env";
import { TouchableOpacity } from "react-native-gesture-handler";
import { commonBlue, tongueRed, whiteBackground } from "../styles/AppTheme";

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      behavior: "web",
      iosClientId: GOOGLE_OAUTH_CLIENT_ID,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      // TODO: send to backend
      return result.idToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

function signInWithGoogle() {
  signInWithGoogleAsync().then(
    (acceptedValue) => {
      // accepted
    },
    (rejectedValue) => {
      // rejected
      alert(
        "Sorry, we can't work with your google account at this time. Please try again or contact us at commontongueapp@gmail.com."
      );
    }
  );
}
export default function SignUp() {
  return (
    <View style={styles.container}>
      <SignInButton />
      <SignUpButton />
    </View>
  );
}

function SignUpButton() {
  return (
    <TouchableOpacity
      style={styles.signUpButton}
      onPress={() => {
        signInWithGoogle();
      }}
    >
      <Text style={styles.text}>sign up with Google</Text>
    </TouchableOpacity>
  );
}
function SignInButton() {
  return (
    <TouchableOpacity
      style={styles.signInButton}
      onPress={() => {
        signInWithGoogle();
      }}
    >
      <Text style={styles.text}>sign in with Google</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: tongueRed,
    borderRadius: 10,
    marginTop: 20,
  },
  signInButton: {
    backgroundColor: commonBlue,
    borderRadius: 10,
  },
  text: {
    color: whiteBackground,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
