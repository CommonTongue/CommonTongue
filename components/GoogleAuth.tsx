import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Google from "expo-google-app-auth";
// @ts-ignore
import { GOOGLE_OAUTH_CLIENT_ID } from "@env";
import { TouchableOpacity } from "react-native-gesture-handler";
import { commonBlue, tongueRed, whiteBackground } from "../styles/AppTheme";
import { BasicUserSchema } from "../contexts/UserContext";

interface AuthButtonProps {
  signInUser: (newUser: BasicUserSchema) => void;
}

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      behavior: "web",
      iosClientId: GOOGLE_OAUTH_CLIENT_ID,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      // TODO: send to backend
      const firstName = result.user.givenName;
      const lastName = result.user.familyName;
      const photoUrl = result.user.photoUrl;
      const email = result.user.email;
      const user: BasicUserSchema = {
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        photoUrl: photoUrl || "",
      };
      return user;
    } else {
      // if user cancels prompt.
      return null;
    }
  } catch (e) {
    alert(
      "Sorry, we can't work with your google account at this time. Please try again or contact us at commontongueapp@gmail.com."
    );
    return null;
  }
}

export function SignUpButton(props: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={styles.signUpButton}
      onPress={() => {
        signInWithGoogleAsync().then((newUser: BasicUserSchema | null) => {
          if (newUser !== null) {
            props.signInUser(newUser);
          }
        });
      }}
    >
      <Text style={styles.text}>sign up with Google</Text>
    </TouchableOpacity>
  );
}

export function SignInButton(props: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={styles.signInButton}
      onPress={() => {
        signInWithGoogleAsync().then((newUser: BasicUserSchema | null) => {
          if (newUser !== null) {
            props.signInUser(newUser);
          }
        });
      }}
    >
      <Text style={styles.text}>sign in with Google</Text>
    </TouchableOpacity>
  );
}

export function SignOutButton(props: { signOutUser: () => void }) {
  return (
    <TouchableOpacity
      style={styles.signOutButton}
      onPress={() => {
        props.signOutUser();
      }}
    >
      <Text style={styles.text}>sign out</Text>
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
  signOutButton: {
    backgroundColor: tongueRed,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: whiteBackground,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
