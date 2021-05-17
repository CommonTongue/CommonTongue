import { createContext } from "react";

const ModalContext = createContext({
  showModal: false, // can also be "dark"
  setShowModal: (value: boolean) => {},
  modalContent: undefined,
});

export default ModalContext;
