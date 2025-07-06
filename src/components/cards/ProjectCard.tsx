import { useModalContext } from "../../contexts/modalContext";
import type { Project } from "../../types/Project";
import ProjectContent from "../modals/ProjectContent";
import BaseCard from "./BaseCard";
import React from "react";

interface props {
    entry: Project;
    style?: React.CSSProperties;
};

const card = ({entry, style}: props) => {
    const useContext = useModalContext();
    const onClick = (content: React.JSX.Element) => { 
        useContext.dispatch({type: "show", newContent: content});
    };

    return (
        <BaseCard style={style} onClick={() => onClick(<ProjectContent project={entry}/>)}>
            <React.Fragment>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <p><b>Technologies: </b>{entry.technologies.map((tech, index) => (index == entry.technologies.length - 1) ? tech.name : tech.name + ", ")}</p>
            </React.Fragment>
        </BaseCard>
    )
}

export default card;