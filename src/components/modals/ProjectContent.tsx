import React from "react";
import type { Project } from "../../types/Project";

interface props {
    project: Project
}

const content = ({project}: props) => (
    <React.Fragment>
        <h2 style={{textAlign: "left", margin: 0, padding: 0, fontWeight: "400"}}>{project.title}</h2>
        <p>{project.description}</p>
        <p><b>Technologies: </b>{project.technologies.map((tech, index) => (index == project.technologies.length - 1) ? tech.name : tech.name + ", ")}</p>
    </React.Fragment>
);

export default content;