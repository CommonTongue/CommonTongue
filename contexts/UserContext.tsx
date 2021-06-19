import { createContext } from "react";

export interface BasicUserSchema {
  email: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
}

interface AdditionalUserInfo {
  level: number;
  decks: string[];
}

export type UserSchema = AdditionalUserInfo | BasicUserSchema;

const UserContext = createContext({
  user: null,
  signInUser: () => {},
  signOutUser: () => {},
} as {
  user: UserSchema | null;
  signInUser: (newUser: BasicUserSchema) => void;
  signOutUser: () => void;
});

export default UserContext;
