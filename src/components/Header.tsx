import NavButton from "./NavButton"; 

interface props {
    scrolled: boolean,
    width: "wide" | "narrow";
}

const Header = ({scrolled, width}: props) => {
    const styles = width=="narrow" 
    ? {
        heading: {
            display: "inline-block",
            fontSize: "18px"
        }, 
        subheading: {
            display: "inline-block",
            fontSize: "18px"
        }
    }    
    : scrolled
    ? {
        heading: {
            padding: "20px 0 40px",
            display: "inline-block",
            fontSize: "24px"
        }, 
        subheading: {
            display: "inline-block",
            fontSize: "24px",
        }
    } 
    : {
        heading: {
            paddingTop: "40px",
            display: "block"
        }, 
        subheading: {
            display: "block",
            paddingBottom: "60px"
        }
    }; 

    return (
            <header>
                <div className="container">
                    <ul>
                        <li><NavButton width={width} scrolled={scrolled} label="About" link="about"/></li>
                        <li><NavButton width={width} scrolled={scrolled} label="Experience" link="experience"/></li>
                        <li><NavButton width={width} scrolled={scrolled} label="Projects" link="projects"/></li>
                        <li><NavButton width={width} scrolled={scrolled} label="Education" link="education"/></li>
                        <li><NavButton width={width} scrolled={scrolled} label="Contact" link="contact"/></li>
                        <li><NavButton width={width} scrolled={scrolled} label="LinkedIn" external link="https://www.linkedin.com/in/jessica-excell/"/></li>
                    </ul>

                    <h1 style={styles.heading}>Jessica Excell&nbsp;</h1>
                    <h1 style={styles.subheading} className="subheading">Software Engineering Undergraduate</h1>                    
                </div>
            </header>
    );
};

export default Header;