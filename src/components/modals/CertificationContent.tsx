import React from "react";
import type { certification } from "../../types/Certification";

interface props {
    certification: certification
}

const content = ({certification}: props) => (
    <React.Fragment>
        <h2 style={{textAlign: "left", margin: 0, padding: 0, fontWeight: "400"}}>{certification.certification}</h2>
        <i style={{marginTop: "5px"}}>{certification.dateAwarded ? `Awarded ${certification.dateAwarded}` : "In progress"}</i>
        <p>{certification.description}</p>
        {certification.url && <button className="button" style={{backgroundColor: "pink", color: "black", marginRight: "5px"}} onClick={() => window.location.replace(`${certification.url}`)}>View certification</button>}
    </React.Fragment>
);

export default content;