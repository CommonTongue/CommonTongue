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
      // need access token and refresh token
      // const backendPayload = {
      //   accessToken: result.accessToken, // different each session
      //   refreshToken: result.refreshToken, // Stored long-term
      // };
      const idToken = result.idToken;
      const accessToken = result.accessToken;
      const refreshToken = result.refreshToken;
      const givenName = result.user.givenName;
      const familyName = result.user.familyName;
      const photoUrl = result.user.photoUrl;
      const id = result.user.id;
      const email = result.user.email;
      // locally store these. every time user launches app,
      // we attempt to sign in with locally stored auth values.
      // ----- How we sign in -----
      // we will send email + accessToken + refreshToken to
      // the server. If accessToken is not stale, we proceed
      // once the server OKs us.
      // If accessToken is stale, the server will refresh
      // TODO: check if it is secure to store accessToken, refreshToken, and email locally.
      return result.accessToken;
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

export function SignUpButton() {
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

export function SignInButton() {
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: tongueRed,
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  signInButton: {
    backgroundColor: commonBlue,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  text: {
    color: whiteBackground,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
