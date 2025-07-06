import React from "react";
import useModal from "../hooks/useModal";
import type { state, action } from "../types/Modal";

interface contextProps {
    state: state;
    dispatch: React.ActionDispatch<[action: action]>
};

interface modalProps {
    children: React.ReactNode;
}

const ModalContext = React.createContext<contextProps | undefined>(undefined);

export const ModalProvider = ({children}: modalProps) => {
    const {state, dispatch} = useModal();

    return (
        <ModalContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = React.useContext(ModalContext);
    if (!context) {
        throw new Error("No context found for useModalContext");
    };
    return context;
}