import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Education";
import Contact from "./sections/Contact";
import BaseModal from "./modals/BaseModal";

interface props {
    scrolled: boolean;
    width: "wide" | "narrow";
};

const content = ({scrolled, width}: props): React.JSX.Element => {
    return (
        <main style={width == "narrow" ? {marginTop: "70px"} : scrolled ? {marginTop: "200px"}: {marginTop: "300px"}}>
            <div style={{margin: "40px 0"}}>
                <BaseModal />
                <Profile />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </div>
        </main>
    );
};

export default content;