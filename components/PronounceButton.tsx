import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { whiteBackground } from "../styles/AppTheme";

export default function PronounceButton() {
  const [talking, setTalking] = useState(false);
  const volumeColor = talking ? whiteBackground : "#000";
  const pronounceWord = () => {
    setTalking(true);
    setTimeout(() => {
      setTalking(false);
    }, 2000);
  };
  return (
    <TouchableWithoutFeedback onPress={pronounceWord}>
      <FontAwesomeIcon icon={faVolumeUp} size={70} color={volumeColor} />
    </TouchableWithoutFeedback>
  );
}
