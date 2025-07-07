import mailImage from "../../assets/mail.svg";
import linkedinImage from "../../assets/logo-linkedin.svg";
import githubImage from "../../assets/logo-github.svg"


const Contact = () => (
    <section id="contact">
        <h2>Contact</h2>
        <p style={{textAlign: "center"}}>Get in touch! You can reach me on any of the listed platforms.</p>
        <div className="contact-container">
            <button onClick={() => window.location.href = "https://www.linkedin.com/in/jessica-excell/"}>
                <img src={linkedinImage} height={50} />
                <p>LinkedIn</p>
            </button>
            <button onClick={() => window.location.href="https://github.com/jess-excell"}>
                <img src={githubImage} height={50} />
                <p>GitHub</p>
            </button>
            <button onClick={() => window.location.href = "mailto:jessicaexcell04@gmail.com"}>
                <img src={mailImage} height={50} />
                <p>Email</p>
            </button>
        </div>
    </section>
);
export default Contact;