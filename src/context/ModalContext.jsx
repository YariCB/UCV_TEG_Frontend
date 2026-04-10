import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ open: false, type: null, payload: null });

  const openModal = (type = null, payload = null) => setModalState({ open: true, type, payload });
  const closeModal = () => setModalState({ open: false, type: null, payload: null });

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);