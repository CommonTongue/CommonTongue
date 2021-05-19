import { createContext } from "react";

export interface LanguageContextSchema {
  language: string;
  setLanguage: (newLanguage: string) => void;
}
export const LearnContext = createContext({
  language: "",
  setLanguage: (newLanguage: string) => {},
} as LanguageContextSchema);

export const TranslateContext = createContext({
  language: "",
  setLanguage: (newLanguage: string) => {},
} as LanguageContextSchema);

export const translateLanguageLocalKey = "translateLanguage";
export const learnLanguageLocalKey = "learnLanguage";
export const defaultLearnLanguageValue = "language to learn"
export const defaultTranslateLanguageValue = "translation language"