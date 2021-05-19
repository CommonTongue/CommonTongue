import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  faCheckSquare,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { commonBlue, tongueRed, whiteBackground } from "../styles/AppTheme";

const supportedLanguages = [
  "German",
  "Belarusian",
  "Amharic",
  "Czech",
  "Portuguese",
  "Spanish",
  "Urdu",
  "Italian",
  "Hebrew",
  "Hindi",
  "Russian",
  "Azerbaijani",
  "Dutch",
  "Korean",
  "Bulgarian",
  "Arabic",
  "French",
  "Indonesian",
  "Bosnian",
  "Bengali",
  "Afrikaans",
  "Greek",
  "Turkish",
  "Vietnamese",
  "English",
].sort();

export default function LanguagePicker(props: {
  onLanguagePick: (value: ValueType) => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    supportedLanguages.map((language: string) => {
      return { label: language, value: language };
    })
  );

  return (
    <DropDownPicker
      containerStyle={styles.container}
      style={styles.dropDown}
      textStyle={styles.text}
      labelStyle={styles.label}
      placeholderStyle={styles.placeholder}
      searchTextInputStyle={styles.searchTextInput}
      searchPlaceholderTextColor={tongueRed}
      ArrowDownIconComponent={(props) => {
        return <FontAwesomeIcon color={whiteBackground} icon={faChevronDown} />;
      }}
      ArrowUpIconComponent={(props) => {
        return <FontAwesomeIcon color={whiteBackground} icon={faChevronUp} />;
      }}
      TickIconComponent={(props) => {
        return <FontAwesomeIcon color={commonBlue} icon={faCheckSquare} />;
      }}
      searchable={true}
      searchPlaceholder={`search for a language...`}
      placeholder={"pick a language"}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue as any}
      setItems={setItems as any}
      disableBorderRadius={true}
      onChangeValue={(value: ValueType | ValueType[] | null) => {
        props.onLanguagePick(value as ValueType);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    /** Styles the outer-most element. */
    backgroundColor: commonBlue,
    borderRadius: 3,
    borderWidth: 0,
  },
  dropDown: {
    /** Styles the top large element. */
    backgroundColor: commonBlue,
    borderWidth: 0,
  },
  text: {
    color: commonBlue,
    fontWeight: "bold",
  },
  label: {
    /** Styles the element that sticks to the selector when an item is selected. */
    color: "white",
    marginLeft: 10,
  },
  placeholder: { color: whiteBackground },
  searchTextInput: { borderWidth: 0, color: tongueRed },
});
