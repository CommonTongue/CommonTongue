import React from "react";
import { View, StyleSheet } from "react-native";
import BottomBar from "./BottomBar";
import Decks from "./Decks";
import Explore from "./Explore";
import Learn from "./Learn";
import TopBar from "./TopBar";

export default function SignedInView(props: {
  level: number;
  setLevel: (newLevel: number) => void;
  activeTab: number;
  setActiveTab: (newActiveTab: number) => void;
}) {
  return (
    <View style={styles.container}>
      <TopBar level={props.level} />
      {props.activeTab === 0 && <Explore setLevel={props.setLevel} />}
      {props.activeTab === 1 && <Decks />}
      {props.activeTab === 2 && <Learn />}
      <BottomBar
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
