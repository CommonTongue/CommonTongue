import { createContext } from "react";

export interface UserSchema {
  email: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
}

const UserContext = createContext({
  user: null,
  signInUser: () => {},
  signOutUser: () => {},
} as {
  user: UserSchema | null;
  signInUser: () => void;
  signOutUser: () => void;
});

export default UserContext;
