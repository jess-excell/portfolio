import React from "react"
import type { state, action } from "../types/Modal";

const useModal = () => {
    const reducer = (state: state, action: action) => {
        switch (action.type) {
            case "show":
                if (!action.newContent) {
                    throw Error ("Missing new content");
                };
                return {...state, visible: true, content: action.newContent };
            case "hide":
                return {...state, visible: false };
        };
    };

    const [ state, dispatch ] = React.useReducer(reducer, {
        content: <div></div>,
        visible: false 
    });

    return { state, dispatch };
};

export default useModal;