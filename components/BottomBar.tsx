import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCompass,
  faGraduationCap,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { bottomBarColor, commonBlue } from "../styles/AppTheme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface TabSchema {
  tabThumbnail: IconProp;
  tabName: string;
}

const tabs: TabSchema[] = [
  {
    tabThumbnail: faCompass,
    tabName: "explore",
  },
  {
    tabThumbnail: faLayerGroup,
    tabName: "decks",
  },
  {
    tabThumbnail: faGraduationCap,
    tabName: "learn",
  },
];

export default function BottomBar(props: {
  activeTab: number;
  setActiveTab: (newTab: number) => void;
}) {
  return (
    <View style={styles.bottomBar}>
      {tabs.map((tab: TabSchema, tabIndex: number) => {
        const tabColor = tabIndex === props.activeTab ? commonBlue : "#000";
        return (
          <TouchableHighlight
            underlayColor={"none"}
            style={styles.actionButton}
            key={`bottom-action-${tabIndex}`}
            onPress={() => props.setActiveTab(tabIndex)}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <FontAwesomeIcon
                size={40}
                icon={tab.tabThumbnail}
                color={tabColor}
              />

              <Text
                style={{
                  color: tabColor,
                }}
              >
                {tab.tabName}
              </Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: "10%",
    backgroundColor: bottomBarColor,
    display: "flex",
    flexDirection: "row",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
});
