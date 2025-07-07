import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Education";
import Contact from "./sections/Contact";
import BaseModal from "./modals/BaseModal";

interface props {
    height: number | undefined
};

const content = ({height}: props): React.JSX.Element => (
    <main style={{paddingTop: `${height}px`}}>
        <BaseModal />
        <Profile />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
    </main>
);

export default content;