import React from "react";
import type { Experience } from "../../types/Experience";

interface props {
    experience: Experience
}

const content = ({experience}: props) => (
    <React.Fragment>
        <h2 style={{textAlign: "left", margin: 0, padding: 0, fontWeight: "400"}}>{experience.title}</h2>
        <i style={{marginTop: "5px"}}>{experience.startDate} to {experience.endDate}</i>
        <p>{experience.description}</p>
    </React.Fragment>
);

export default content;