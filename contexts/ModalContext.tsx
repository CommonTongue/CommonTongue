import { createContext } from "react";

export type ModalContentSchema = undefined | JSX.Element;

export interface ModalContextSchema {
  showModal: boolean;
  modalContent: ModalContentSchema;
  toggleModal: (showModal: boolean, ModalContext: ModalContentSchema) => void;
}
const ModalContext = createContext({
  showModal: false,
  modalContent: undefined,
  toggleModal: (showModal, modalContent) => {},
} as ModalContextSchema);

export default ModalContext;
