import NavButton from "./NavButton"; 

interface props {
    scrolled: boolean,
    width: "wide" | "narrow";
}

const Header = ({scrolled, width}: props) => {
    const styles = width == "narrow" 
    ? {
        heading: {
            display: "inline-block",
            fontSize: "18px",
            marginBottom: 0
        }, 
        subheading: {
            display: "inline-block",
            fontSize: "18px"
        }
    }    
    : scrolled
    ? {
        heading: {
            display: "inline-block",
            fontSize: "24px"
        }, 
        subheading: {
            padding: "20px 0 40px",
            display: "inline-block",
            fontSize: "24px",
        }
    } 
    : {
        heading: {
            display: "block"
        }, 
        subheading: {
            padding: "40px 0 60px",
            display: "block"
        }
    }; 

    return (
            <header id="header">
                <div className="container">
                    <div className="buttons">
                        <NavButton label="About" link="about"/>
                        <NavButton label="Experience" link="experience"/>
                        <NavButton label="Projects" link="projects"/>
                        <NavButton label="Education" link="education"/>
                        <NavButton label="Contact" link="contact"/>
                        <NavButton label="LinkedIn" external link="https://www.linkedin.com/in/jessica-excell/"/>
                    </div>
                    <h1 style={styles.heading}>Jessica Excell&nbsp;</h1>
                    <h1 style={styles.subheading} className="subheading">Software Engineering Undergraduate</h1>                    
                </div>
            </header>
    );
};

export default Header;