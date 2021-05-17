import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { commonBlue, tongueRed } from "../styles/AppTheme";

export default function PronounceButton() {
  const [talking, setTalking] = useState(false);
  const volumeColor = talking ? commonBlue : "#000";
  const pronounceWord = () => {
    setTalking(true);
    setTimeout(() => {
      setTalking(false);
    }, 2000);
  };
  return (
    <TouchableWithoutFeedback onPress={pronounceWord}>
      <FontAwesomeIcon icon={faVolumeUp} size={40} color={volumeColor} />
    </TouchableWithoutFeedback>
  );
}
