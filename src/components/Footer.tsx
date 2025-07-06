import projects from "../constants/projects";

const Footer = () => (
    <footer>
        <div className="container">
            <div style={{flex: 2}}>
                <h3>Jessica Excell Portfolio</h3>
            </div>
            <div>
                <h4>Projects</h4>
                { projects.map(p => <h5 key={p.title}>{p.title}</h5>)}
            </div>
            <div>
                <h4>Get in touch</h4>
                <p>Email: <a href="mailto:jessicaexcell04@gmail.com">jessicaexcell04@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jessica-excell/">https://www.linkedin.com/in/jessica-excell/</a></p>
                <p>GitHub: <a href="https://github.com/jess-excell">https://github.com/jess-excell</a></p>
            </div>
        </div>
    </footer>
);

export default Footer;