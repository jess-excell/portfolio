import type { Project } from "../types/Project";
import technologies from "./technologies";

const projects: Project[] = [
    {
        title: "MisoMute",
        technologies: [ technologies.ReactNative ],
        description: "Created a prototype system to assist people with misophonia. The prototype identifies triggering sounds in real time using the user's microphone, then muffles the sound by layering white noise on top of the sound."
    },
    {
        title: "RECSS (Receipt Scanning System)",
        technologies: [ technologies.DjangoRESTFramework, technologies.ReactNative, technologies.TypeScript, technologies.Python ],
        description: "Created a prototype receipt scanning system to streamline finance management. Unlike existing systems, RECSS analyses each item in a receipt to produce accurate, insightful finance reports for users."
    },
    {
        title: "Proof of Concept Web-Based Tracking System",
        technologies: [ technologies.React, technologies.TypeScript ],
        description: "Developed a proof of concept web-based tracking system for Willowbank Education. The prototype allows students to log in and track their progress across activities using a personalised dashboard. The system also allows administrators to monitor student performance."
    },
    {
        title: "HCAMS (Health Clinic Appointment Management System)",
        technologies: [ technologies.React ],
        description: "Developed a proof of concept Health Clinic Appointment Management System, using the tools requested by the client. The prototype allows patients, doctors and administrators to manage appointments."
    }
];

export default projects;