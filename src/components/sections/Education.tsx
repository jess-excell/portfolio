import education from "../../constants/education";
import certifications from "../../constants/certifications";
import EducationItem from "../EducationItem";
import CertificationCard from "../cards/CertificationCard";

const component = () => <section id="education">
    <h2>Education</h2>
    <h3>Formal Education</h3>
    { education.map(entry => <EducationItem key={entry.level} education={entry} />)}
    
    <h3 style={{paddingTop: "25px"}}>Additional Certifications</h3>
    <p>The following certifications have been achieved in the past 24 months, or are in progress. All certifications can be viewed on my LinkedIn.</p>
    <div className="card-container" style={{gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"}}>
        { certifications.map(entry => <CertificationCard key={entry.certification} certification={entry}/>)}
    </div>
</section>;

export default component;