import { useModalContext } from "../../contexts/modalContext";
import type { Experience } from "../../types/Experience";
import ExperienceContent from "../modals/ExperienceContent";
import BaseCard from "./BaseCard";
import React from "react";

interface props {
    entry: Experience;
    style?: React.CSSProperties;
};

const card = ({entry, style = {}}: props) => {
    const useContext = useModalContext();
    const onClick = (content: React.JSX.Element) => {
        useContext.dispatch({type: "show", newContent: content})
    }

    return <BaseCard style={style} onClick={() => onClick(<ExperienceContent experience={entry}/>)}>
        <React.Fragment>
            <h3>{entry.title}</h3>
            <h4 style={{fontWeight: 200}}>{entry.company}</h4>
            <i>{entry.startDate} - {entry.endDate}</i>
            <p>{entry.description}</p>
        </React.Fragment>
    </BaseCard>
}

export default card;