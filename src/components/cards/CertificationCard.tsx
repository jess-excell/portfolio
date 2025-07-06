import { useModalContext } from "../../contexts/modalContext";
import type { certification } from "../../types/Certification";
import CertificationContent from "../modals/CertificationContent";
import BaseCard from "./BaseCard";
import React from "react";

interface props {
    certification: certification;
    style?: React.CSSProperties;
};

const card = ({certification, style = {}}: props) => {
    const useContext = useModalContext();
    const onClick = (content: React.JSX.Element) => { 
        useContext.dispatch({type: "show", newContent: content});
    };
    
    return (
        <BaseCard style={style} onClick={() => onClick(<CertificationContent certification={certification}/>)}>
            <React.Fragment>
                <h3 style={{color: "#000"}}>{certification.certification}</h3>
                <p style={{marginTop: "5px"}}>{certification.dateAwarded ? `Awarded ${certification.dateAwarded}` : "In progress"}</p>        
            </React.Fragment>
        </BaseCard>
    );
};

export default card;